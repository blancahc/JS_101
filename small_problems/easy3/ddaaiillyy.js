// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.

// Examples:

// Copy Code
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

function crunch(str) {
  let newStr = '';
  for (let index = 0; index < str.length; index += 1) {
    if (str[index + 1] !== str[index]) {
      newStr += str[index];
    }
  }
  return newStr;
}
crunch('ddaaiillyy ddoouubbllee');