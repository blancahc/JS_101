// Get The Middle Character
// Write a function that takes a non-empty string argument, and returns
// the middle character(s) of the string. If the string has an odd length,
// you should return exactly one character. If the string has an even length,
// you should return exactly two characters.


// Examples:
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

function centerOf(str) {
  let length = str.length;
  if (length % 2 === 0) {
    return `${str[(length / 2) - 1]}${str[(length / 2)]}`;
  }
  length = Math.floor(length / 2);
  return str[length];
}