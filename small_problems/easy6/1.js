// Double Char (Part 1)
// Write a function that takes a string, doubles every character in the string,
// and returns the result as a new string.

// Examples:
// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

function repeater(str) {
  let newStr = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    newStr += str[idx] + str[idx];
  }
  return newStr;
}

// Examples:
// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""