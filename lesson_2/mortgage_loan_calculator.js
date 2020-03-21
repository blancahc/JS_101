const MESSAGES = require('./mortgage_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  //return number.trim() === '' || Number.isNaN(number) || number <= 0;
  return Number.isNaN(number) || number <= 0;
}

function validateAnotherCalculation(anotherCalculation) {
if (anotherCalculation.toLowerCase() === 'yes' || anotherCalculation.toLowerCase() === 'no') {
  return false;
}
  return true;
}
function loanAmount() {
  prompt(MESSAGES['loanAmount']);
  let loanAmount = Number(readline.question());

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES['invalidNumber']);
    loanAmount = Number(readline.question());
  }
  return loanAmount;
}

function lengthOfLoan() {
  prompt(MESSAGES['lengthOfLoan']);
  let lengthInYears = Number(readline.question());

  while (invalidNumber(lengthInYears)
  || !Number.isInteger(lengthInYears)) {
    prompt(`${MESSAGES['invalidNumber']} It must be an integer.`);
    lengthInYears = Number(readline.question());
  }
  return lengthInYears;
}

function interestRate() {
  prompt(MESSAGES['interestRate']);
  let annualInterestRate = Number(readline.question());

  while (invalidNumber(annualInterestRate)) {
    prompt(MESSAGES['invalidNumber']);
    annualInterestRate = Number(readline.question());
  }
  return annualInterestRate;
}

function calculateLoan() {
  let lengthInMonths = lengthOfLoan() * 12;

  let monthlyInterestRate = interestRate() / 100 / 12;

  let monthlyPayment = loanAmount() * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate),(-lengthInMonths))));

  monthlyPayment = monthlyPayment.toFixed(2);
  return prompt(`${MESSAGES['result']}${monthlyPayment}`);
}

function anotherCalculation() {
  prompt(MESSAGES['anotherCalculation']);
  let anotherCalculation = readline.question();

  while (validateAnotherCalculation(anotherCalculation)) {
    prompt(MESSAGES['validateAnotherCalculation']);
    anotherCalculation = readline.question();
  }
  if (anotherCalculation.toLowerCase() === 'yes') {
    console.clear();
    return startCalculator();
  }
  return prompt('GoodBye!');
}

prompt(MESSAGES['welcome']);

startCalculator();

function startCalculator() {
  calculateLoan();
  anotherCalculation();
}

