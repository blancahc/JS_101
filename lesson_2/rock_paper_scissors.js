const readline = require('readline-sync');
const VALID_CHOICES = {rock: 'r', paper: 'p', scissors: 's', spock: 'sp', lizard: 'l'};

let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayChoices() {
  let text = '';
  for (const property in VALID_CHOICES) {
    text += `'${VALID_CHOICES[property]}' for ${property}` + '\n';
  }
  return text;
}

function shortToLongChoice(choice) {
  let longChoice = '';
  for (const property in VALID_CHOICES) {
    if (choice === VALID_CHOICES[property]) {
      longChoice = property;
    }
  }
  return longChoice;
}

function playerWins (playerChoice, computerChoice) {
  return (playerChoice === 'rock' && computerChoice === 'scissors') ||
         (playerChoice === 'rock' && computerChoice === 'lizard') ||
         (playerChoice === 'paper' && computerChoice === 'rock') ||
         (playerChoice === 'paper' && computerChoice === 'spock') ||
         (playerChoice === 'scissors' && computerChoice === 'paper') ||
         (playerChoice === 'spock' && computerChoice === 'lizard') ||
         (playerChoice === 'lizard' && computerChoice === 'paper') ||
         (playerChoice === 'lizard' && computerChoice === 'spock') ||
         (playerChoice === 'spock' && computerChoice === 'rock') ||
         (playerChoice === 'spock' && computerChoice === 'scissors');
}

let choicesText = displayChoices();

let choicesArray = Object.values(VALID_CHOICES);

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);
  let playerWon = playerWins(playerChoice, computerChoice);
  if (playerWon) {
    prompt('You win!');
  } else if (playerChoice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt('Computer wins!');
  }
}

function keepScore(playerChoice, computerChoice) {
  let playerWon = playerWins(playerChoice, computerChoice);
  if (playerWon) {
    playerScore += 1;
  } else if (playerChoice === computerChoice) {
    playerScore += 0;
  } else {
    computerScore += 1;
  }
}

while (true) {
  console.clear();
  prompt(`Let's see who will get to 5 wins first!`);

  while (true) {
    prompt('Choose one:' + '\n' + choicesText);
    let playerChoice = readline.question();


    while (!choicesArray.includes(playerChoice)) {
      prompt("That's not a valid choice");
      playerChoice = readline.question();
    }
    playerChoice = shortToLongChoice(playerChoice);

    let randomIndex = Math.floor(Math.random() * choicesArray.length);
    let computerChoice = choicesArray[randomIndex];
    computerChoice = shortToLongChoice(computerChoice);

    displayWinner(playerChoice, computerChoice);

    keepScore(playerChoice, computerChoice);

    console.clear();
    prompt(`You have ${playerScore} wins, Computer has ${computerScore} wins.`);

    if (computerScore === 5) {
      prompt(`Game over, you already lost 5 rounds!`);
      break;
    }

    if (playerScore === 5) {
      prompt(`Congratulations, you won 5 rounds!`);
      break;
    }

  }
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n" .');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

}
