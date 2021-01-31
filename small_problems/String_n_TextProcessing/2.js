// Write a function that takes an array of strings, and returns an array of
// the same values with all vowels (a, e, i, o, u) removed.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function removeVowels(arr) {
  let result = [];
  //iterate through array
  // iterate throught str
  //for each string, remove VOWELS
  arr.forEach(word => {
    let str = '';
    for (let i = 0; i < word.length; i++) {
      if(!VOWELS.includes(word[i].toLowerCase())) {
        str += word[i]
      }
    }
    result.push(str);
  });
  return result;
}


removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]