// const readline = require("readline-sync");

const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
const VALUE = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const ANSWERS_TO_HIT_OR_STAY = ["hit", "stay", "h", "s"];
const ANSWERS_TO_PLAY_AGAIN = ["yes", "no", "y", "n"];
const BLACK_JACK = 21;

// function prompt(msg) {
//   console.log(`=> ${msg}`);
// }

function initializeDeck(cards) {
  SUITS.forEach(suit => {
    return VALUE.forEach(value => cards.push({suit: suit, value: value}));
});
  return cards;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function dealCard(toWho, cards) {
  toWho.push(cards[0]);
  cards.splice(0, 1);
}

function initialDeal(playerCards, dealerCards, cards) {
  dealCard(playerCards, cards);
  dealCard(playerCards, cards);
  dealCard(dealerCards, cards);
  dealCard(dealerCards, cards);
}

function initialBlackJack(playerTotal) {
  if (playerTotal === BLACK_JACK) {
    return true;
  }
  return false;
}
function displayPlayerGotLucky() {
  console.log(`You got lucky and got 21 of first deal!`);
  console.log(`You win!`);
}

function displayBothBlackjack() {
  console.log(`You got lucky and got 21 of first deal!`);
  console.log(`However, dealer also got 21. It's a tie!`);
}

function total(xCards) {
  let values = xCards.map(card => card['value']);

  let sum = 0;
  values.forEach(value => {
    if (value === "Ace") {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "Ace").forEach(_ => {
    if (sum > BLACK_JACK) sum -= 10;
  });

  return sum;
}

//check if there is a bust
function isBusted(xCards) {
  return total(xCards) > BLACK_JACK;
}


function determineWinner(playerTotal, dealerTotal) {
  if (playerTotal === dealerTotal) {
    console.log(`It's a tie.`);
  } else if (playerTotal === BLACK_JACK) {
    console.log(`You win!`);
  } else if (dealerTotal === BLACK_JACK) {
    console.log(`Sorry, dealer wins!`);
  } else if (dealerTotal > playerTotal) {
    console.log(`Sorry, dealer wins!`);
  } else {
    console.log(`You win!`);
  }
}
function readCards(xCards) {
  return xCards.map(card => card['value'] + ' of ' + card['suit']);
}
function displayCards(playerCards, dealerCards, playerTotal, dealerTotal) {
  let showPlayerCards = readCards(playerCards);
  let showDealerCards = readCards(dealerCards);
  console.clear();
  console.log(`Your Cards: ${showPlayerCards} | Total ${playerTotal}`);
  console.log(`Dealer Cards: ${showDealerCards} | Total ${dealerTotal}`);
}


function initiateGame (cards, playerCards, dealerCards) {
  initializeDeck(cards);
  shuffle(cards);
  initialDeal(playerCards, dealerCards, cards);
}

function wantToPlayAgain() {
  //prompt(`Do you want to play again? (type "y" or "n")`);
  let answer = prompt(`Do you want to play again? (type "y" or "n")`);
  //let answer = readline.question().toLowerCase().trim();
  answer.toLowerCase().trim();
  while (ANSWERS_TO_PLAY_AGAIN.includes(answer) === false) {
    //prompt(`Invalid answer. Please enter "y" or "n"`);
    answer = prompt(`Invalid answer. Please enter "y" or "n"`);
    //answer = readline.question().toLowerCase();
    answer.toLowerCase().trim();
  }
  return answer === 'y' || answer === 'yes';
}

debugger;
while (true) {
  console.clear();
  console.log('Welcome to Twenty One!');
  let cards = [];
  let playerCards = [];
  let dealerCards = [];
  initiateGame (cards, playerCards, dealerCards);
  //check if player got Black Jack on first deal
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);
  if (initialBlackJack(playerTotal)) {
    if (dealerTotal === BLACK_JACK) {
      displayBothBlackjack();
    } else {
      displayPlayerGotLucky();
    }
    if (wantToPlayAgain()) {
      continue;
    } else {
      console.log('Thanks for playing!');
      break;
    }
  }

  let sayPlayerCards = readCards(playerCards);
  let sayDealerCards = readCards(dealerCards);
  console.log(`Dealer has ${sayDealerCards[0]} and ?`);
  console.log(`You have: ${sayPlayerCards}, for a total of ${total(playerCards)}.`);

  // player turn
  while (true) {
    let playerTurn;
    while (true) {
      playerTurn = prompt('Would you like to (h)it or (s)tay?');
      playerTurn.toLowerCase().trim();
      if (ANSWERS_TO_HIT_OR_STAY.includes(playerTurn)) break;
      console.log("Sorry, must enter 'h' or 's'.");
    }

    if (playerTurn === 'h' || playerTurn === 'hit') {
      dealCard(playerCards, cards);
      let sayPlayerCards = readCards(playerCards);
      console.log('You chose to hit!');
      console.log(`Your cards are now: ${sayPlayerCards}`);
      console.log(`Your total is now: ${total(playerCards)}`);
    }

    if (playerTurn === 's' || playerTurn === 'stay' || isBusted(playerCards)) break;
  }

  if (isBusted(playerCards)) {
    console.log(`Sorry, you busted and lost!`);
    if (wantToPlayAgain()) {
      continue;
    } else {
      console.log('Thanks for playing!');
      break;
    }
  } else {
    console.log(`You stayed. Dealer Turn.`);
  }

  // dealer turn
  while (total(dealerCards) < 17) {
    console.log(`Dealer hits!`);
    dealCard(dealerCards, cards);
  }

  if (isBusted(dealerCards)) {
    console.log(`Dealer total is now: ${total(dealerCards)}`);
    console.log(`Dealer busted, you win!`);
    if (wantToPlayAgain()) {
      continue;
    } else {
      console.log('Thanks for playing!');
      break;
    }
  } else {
    console.log(`Dealer stays.`);
  }

  // determine winner
  playerTotal = total(playerCards);
  dealerTotal = total(dealerCards);
  displayCards(playerCards, dealerCards, playerTotal, dealerTotal);

  determineWinner(playerTotal, dealerTotal);

  if (!wantToPlayAgain()) {
    console.log('Thanks for playing!');
    break;
  }
}
