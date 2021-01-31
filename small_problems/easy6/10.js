// Reverse It (Part 2)
// Write a function that takes a string argument containing one or more words,
// and returns a new string containing the words from the string argument. All
// five-or-more letter words should have their letters in reverse order. The
// string argument will consist of only letters and spaces. Words will be
// separated by a single space.

// Examples:
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

// first convert string into array of words

// loop through array. If word.length => 5, reverse it

// convert the array into string

function reverseWords(str) {
  let arr = str.split(' ');
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx].length >= 5) {
      arr[idx] = arr[idx].split('').reverse().join('');
    }
  }
  return arr.join(' ');
}