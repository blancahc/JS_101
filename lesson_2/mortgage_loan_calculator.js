const MESSAGES = require('./mortgage_messages.json');
const readline = require('readline-sync');


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || number < 0;
}

prompt(MESSAGES['welcome']);

while (true) {
  prompt(MESSAGES['loanAmount']);
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES['invalidNumber']);
    loanAmount = readline.question();
  }

  prompt(MESSAGES['lengthOfLoan']);
  let lengthOfLoaninYears = readline.question();

  while (invalidNumber(lengthOfLoaninYears)) {
    prompt(MESSAGES['invalidNumber']);
    lengthOfLoaninYears = readline.question();
  }

  prompt(MESSAGES['interestRate']);
  let annualInterestRate = readline.question();

  while (invalidNumber(annualInterestRate)) {
    prompt(MESSAGES['interestRate']);
    annualInterestRate = readline.question();
  }
  let lengthOfLoaninMonths = Number(lengthOfLoaninYears) * 12;

  let monthlyInterestRate = (Number(annualInterestRate) / 100 ) / 12;

  let monthlyPayment = Number(loanAmount) * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate),(-lengthOfLoaninMonths))));

  monthlyPayment = monthlyPayment.toFixed(2);
  prompt(`${MESSAGES['result']}${monthlyPayment}`);

  prompt(MESSAGES['anotherOperation']);
  let anotherCalculation = readline.question();

  if (anotherCalculation[0].toLowerCase() !== 'y') {
    return;
  }
}

