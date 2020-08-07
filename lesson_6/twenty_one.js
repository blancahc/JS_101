const readline = require("readline-sync");
const CARD_VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const SUITS = ['H', 'D', 'C', 'S'];
let CARDS;
let PLAYER_CARDS;
let DEALER_CARDS;
let PLAYER_TOTAL;
let DEALER_TOTAL;
const ANSWERS_TO_HIT_OR_STAY = ["hit", "stay"];
const ANSWERS_TO_PLAY_AGAIN = ["yes", "no"];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

//initialize deck by combining each CARD_VALUE with each SUIT
function initializeDeck() {
  SUITS.forEach(suit => {
    return CARD_VALUES.forEach(card => CARDS.push(card + suit));
});
  return CARDS;
}

function shuffle() {
  for (let index = CARDS.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [CARDS[index], CARDS[otherIndex]] = [CARDS[otherIndex], CARDS[index]]; // swap elements
  }
}

function dealCard(toWho) {
  toWho.push(CARDS[0]);
  CARDS.splice(0, 1);
}

function initialDeal() {
  dealCard(PLAYER_CARDS);
  dealCard(PLAYER_CARDS);
  PLAYER_TOTAL = total(PLAYER_CARDS);
  dealCard(DEALER_CARDS);
  dealCard(DEALER_CARDS);
  DEALER_TOTAL = total(DEALER_CARDS);
}

//Card value 
function valueOfCard(card) {
  let value;
  if (card.length === 3) {
    value = 10;
    return value;
  }
  if (Number(card[0])) {
    value = Number(card[0]);
    return value;
  }
  if (card[0] === 'A') {
    value = 11;
    return 11;
  }
  value = 10;
  return value;
}

function total(cards) {
  let values = cards.map(card => valueOfCard(card));

  let sum = 0;
  values.forEach(value => {
      sum += value;
  });

  // correct for Aces
  cards.filter(card => card[0] === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}


//check if there is a bust
function busted(who) {
  if (who === 'player') {
    PLAYER_TOTAL = total(PLAYER_CARDS);
  if (PLAYER_TOTAL > 21) {
    return true;
  }
  }
  if (who === 'dealer') {
    DEALER_TOTAL = total(DEALER_CARDS);
  if (DEALER_TOTAL > 21) {
    return true;
  }
  }
}

function playerTurn() {
  while (true) {
   console.clear();
   prompt(`You have: ${PLAYER_CARDS}.`);
   prompt(`Dealer has: ${DEALER_CARDS[0]} and ?.`);
   prompt(`Stay or Hit? (type "stay" or "hit")`);
    let answer = readline.question().toLowerCase().trim();
    while(ANSWERS_TO_HIT_OR_STAY.includes(answer) === false) {
      prompt(`Invalid answer. Please enter "hit" or "stay"`);
      answer = readline.question().toLowerCase();
    }
    if (answer === 'hit') {
      dealCard(PLAYER_CARDS);
    }
    if (answer === 'stay' || busted('player')) break;
  }
  if (busted('player')) {
    return 'busted';
  } else {
    console.log("You chose to stay!");
    dealerTurn();
  }
}

function dealerTurn() {
  //while cardsTotal equal is less than seventeen, hit
  while (DEALER_TOTAL < 17) {
    dealCard(DEALER_CARDS);
    DEALER_TOTAL = total(DEALER_CARDS);
  }
  if (DEALER_TOTAL > 21) {
    return 'busted';
  }
}

function determineWinner() {
  if (PLAYER_TOTAL === DEALER_TOTAL) {
    console.log(`It's a push.`);
  } else if (PLAYER_TOTAL === 21) {
    console.log(`Player Wins!`);
  } else if (DEALER_TOTAL === 21) {
    console.log(`Dealer Wins!`);
  } else if (DEALER_TOTAL > PLAYER_TOTAL) {
    console.log(`Dealer Wins!`);
  } else {
    console.log(`Player Wins!`);
  }
}

function displayCards() {
  console.clear();
  prompt(`Game Over`);
  console.log(`Your Cards: ${PLAYER_CARDS}`);
  console.log(`Dealer Cards: ${DEALER_CARDS}`);
}

//at the beginning of 21, check if initial 2 cards for player equal 21, 
//if so, also check if delear's 2 cards equal 21
function doInitialCardsTotal21() {
  if (PLAYER_TOTAL === 21) {
    if (DEALER_TOTAL === 21) {
      displayCards();
      prompt(`It's a push. Both you and Dealer got 21 on first deal.`);
      return `push`;
    }
    displayCards();
    prompt('Lucky, you got 21 on the first deal. You win!');
    return `player`;
  }
}

function initiateGame () {
  console.clear();
  CARDS = [];
  PLAYER_CARDS = [];
  DEALER_CARDS = [];
  PLAYER_TOTAL = 0;
  DEALER_TOTAL = 0;
  initializeDeck();
  shuffle();
  initialDeal();
}

function wantToPlayAgain() {
  prompt(`Do you want to play again? (type "yes" or "no")`);
  let answer = readline.question().toLowerCase().trim();
  while (ANSWERS_TO_PLAY_AGAIN.includes(answer) === false) {
    prompt(`Invalid answer. Please enter "yes" or "no"`);
    answer = readline.question().toLowerCase();
  }
  if (answer === 'yes') {
    console.clear();
    return newGame();
  }
  return console.log('GoodBye!');
}
function newGame() {
initiateGame();
if (doInitialCardsTotal21()) return wantToPlayAgain();
let playerTurnResult = playerTurn();
if (playerTurnResult === 'busted') {
  displayCards();
  prompt(`Sorry, you busted and lost!`);
  wantToPlayAgain();
} else {
  let dealerTurnResult = dealerTurn();
  if (dealerTurnResult === 'busted') {
    displayCards();
    prompt(`Dealer busted. You win!`);
    return wantToPlayAgain();
  } else {
    displayCards();
    console.log(determineWinner());
    return wantToPlayAgain();
  }
}
}
newGame();