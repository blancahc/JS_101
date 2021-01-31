// SUM OR PRODUCT OF CONSECUTIVE INTEGERS
// Write a program that asks the user to enter an integer
// greater than 0, then asks whether the user wants to determine
// the sum or the product of all numbers between 1 and the entered
// integer, inclusive.

let currentNum = 1;
// Ask the user to enter an integer greater than 0
let integer = prompt('Enter an integer greater than 0.');
integer = Number(integer);
// User, do you want to determine sum or product of nums 1 and integer
let operation = prompt('I can determine the sum or product of all numbers' +
' between 1 and your integer, inclusive. Would you like the (p)roduct' +
' or the (s)um?');
// If sum, return the sum
if (operation === 's') {
  let sum = 0;
  while (currentNum <= integer) {
    sum += currentNum;
    currentNum++;
  }
  console.log(`The sum of the numbers between 1 and ${integer} is ${sum}.`);
} else if (operation === 'p') {
  let prod = 1;
  while (currentNum <= integer) {
    prod *= currentNum;
    currentNum++;
  }
  console.log(`The product of the numbers between 1 and ${integer} is ${prod}.`);
} else {
  console.log(`Sorry, invalid operation choice.`)
}