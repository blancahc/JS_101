// Word to Digit
// Write a function that takes a sentence string as an argument, and returns
// that string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.

function wordToDigit(str) {
  const NUMBERS =  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine'];

  NUMBERS.forEach((word, idx) => {
    while (str.includes(word)) {
      str = str.replace(word, idx.toString());
    }
  });
  return str;
}
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."