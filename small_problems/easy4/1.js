// Build a program that randomly generates Teddy's age, and logs it to the
// console.
// Have the age be a random number between 20 and 120 (inclusive).
// Example: Teddy is 69 years old!

let min = Math.ceil(20);
let max = Math.floor(120);
let age = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`Teddy is ${age} years old!`);
