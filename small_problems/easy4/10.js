// Given a string of words separated by spaces, write a function that swaps
// the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the
// string will always contain at least one word. You may also assume that each
// string contains nothing but words and spaces, and that there are no leading,
// trailing, or repeated spaces.

// Examples:
// swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"

// word[0]<--> word[word.length-1]

// Data Structure
  // Array

// First seperate each word
// swap the first and last letter in each word

function swap(str) {
  let wordsArray = str.split(' ');
  let swappedWordsArray = [];
  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    swappedWordsArray.push(swapLettersWord(wordsArray[idx]));
  }
  return swappedWordsArray.join(' ');
}

function swapLettersWord(word) {
  let lettersArray = word.split('');
  let firstLetter = lettersArray[0];
  let lastLetter = lettersArray[lettersArray.length - 1];
  lettersArray[0] = lastLetter;
  lettersArray[lettersArray.length - 1] = firstLetter;
  return lettersArray.join('');
}
