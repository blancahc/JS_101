// Swap Case
// Write a function that takes a string as an argument, and returns that string
// with every lowercase letter changed to uppercase and every uppercase letter
// changed to lowercase. Leave all other characters unchanged.

function swapCase(words) {
  return words
    .split('')
    .map(char => {
      if (char >= 'a' && char <= 'z') {
        return char.toUpperCase();
      } else if (char >= 'A' && char <= 'Z') {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
  .join('');
}
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"