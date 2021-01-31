// Greeting a user
// Write a program that will ask for user's name. The program will then
// greet the user. If the user writes "name!" then the computer yells
// back to the user.

// Examples

// What is your name? Bob
// Hello Bob.
// Copy Code
// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

//ask user for name
//if user responds with an exclamation mark at the end, yell at user
// else, just say "Hello 'name'".

let userName = prompt('What is your name?');
let statement;
if (userName[userName.length - 1] === '!') {
  userName = userName.slice(0, -1);
  statement = `HELLO ${userName.toUpperCase()}. WHY ARE WE SCREAMING?`;
} else {
  statement = `Hello ${userName}.`;
}
console.log(statement);