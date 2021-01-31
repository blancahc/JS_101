// Double Char (Part 2)
// Write a function that takes a string, doubles every consonant character in
// the string, and returns the result as a new string. The function should not
// double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(str) {
  let newStr = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if (CONSONANTS.includes(str[idx].toLowerCase())) {
      newStr += str[idx];
    }
    newStr += str[idx];
  }
  return newStr;
}

//Examples:
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""