// Capitalize Words
// Write a function that takes a string as an argument, and returns that
// string with the first character of every word capitalized and all
// subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

// function wordCap(str) {
//   let arr = str.split(' ');
//   let result = [];
//   arr.forEach(word => {
//     let newWord = word[0].toUpperCase();
//     for (let i = 1; i < word.length; i++) {
//       newWord += word[i].toLowerCase();
//     }
//     result.push(newWord);
//   });
//   return result.join(' ');
// }

function wordCap(words) {
  return words
  .split(' ')
  .map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');
}
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'