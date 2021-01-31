// Uppercase Check
// Write a function that takes a string argument, and returns true if all of
// the alphabetic characters inside the string are uppercase; false otherwise.
// Ignore characters that are not alphabetic.

const CAPITAL_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function isUppercase(str) {
  for (let idx = 0; idx < str.length; idx += 1) {
    if (!CAPITAL_LETTERS.includes(str[idx].toUpperCase())) {
      continue;
    } else if (!CAPITAL_LETTERS.includes(str[idx])) {
      return false;
    }
  }
  return true;
}
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

//SOLUTION:
function isUppercase(string) {
  return string.toUpperCase() === string;
}

