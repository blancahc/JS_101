// Lettercase Percentage Ratio
// Write a function that takes a string, and returns an object containing the
// following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// create object
// save the string length
// determine how many characters are lowerCase/length, save it to object
// determine how many characters are upperCase/length, save it to object
// determine how many characters are neither/length, save it to object
// return object
function letterPercentages(str) {
  let result = {};
  result.lowercase = 0;
  result.uppercase = 0;
  result.neither = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    if (char >= 'a' && char <= 'z') {
      result.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  }
  result.lowercase = ((result.lowercase/str.length) * 100).toFixed(2);
  result.uppercase = ((result.uppercase/str.length) * 100).toFixed(2);
  result.neither = ((result.neither/str.length) * 100).toFixed(2);
  return result;
}
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }