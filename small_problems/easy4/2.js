// Searching 101
// Write a program that solicits six numbers from the user, then logs a message
// that describes whether or not the sixth number appears amongst the first five
// numbers.

// Examples:

// Ask for numbers
// Save the numbers into an array
// Find the last number within the array
// log whether numbers appear or not. 

let numbers = [];
numbers.push(prompt('Enter the 1st number:'));
numbers.push(prompt('Enter the 2nd number:'));
numbers.push(prompt('Enter the 3rd number:'));
numbers.push(prompt('Enter the 4th number:'));
numbers.push(prompt('Enter the 5th number:'));
let number = prompt('Enter the last number:');

let numbersString = numbers.join(', ')

if (numbers.includes(number)) {
  console.log(`The number ${number} appears in ${numbersString}.`);
} else {
  console.log(`The number ${number} does not appear in ${numbersString}.`);
}