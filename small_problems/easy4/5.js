// Write another function that returns true if the string passed as an argument is
// a palindrome, or false otherwise. This time, however, your function should be
// case-insensitive, and should ignore all non-alphanumeric characters. If you wish,
// you may simplify things by calling the isPalindrome function you wrote in the
// previous exercise.


// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false

function isPalindrome (str) {
  return str === str.split('').reverse().join('');
}

function getAlphanumeric(str) {
  let alphanumeric = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    if ((str[idx] >= '0' && str[idx] <= '9') || (str[idx] >= 'a' && str[idx] <= 'z')) {
      alphanumeric += str[idx];
    }
  }
  return alphanumeric;
}
function isRealPalindrome(str) {
  str = str.toLowerCase();
  let alphanumeric = getAlphanumeric(str);
  let getAnswer = isPalindrome(alphanumeric);
  return getAnswer;
}

isRealPalindrome("Madam, I'm Adam");