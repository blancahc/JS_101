// Palindromic Strings (Part 1)
// Write a function that returns true if the string passed as an argument is a
// palindrome, or false otherwise. A palindrome reads the same forwards and
// backwards. For this problem, the case matters and all characters matter.

// Examples:
// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

//first half is the same as last half
function isPalindrome(str) {
let end = str.length - 1;
for (let idx = 0; idx < str.length / 2; idx += 1) {
  if (str[idx] !== str[end]) {
    return false;
  }
  end -= 1;
}
return true;
}
 isPalindrome('madam');
