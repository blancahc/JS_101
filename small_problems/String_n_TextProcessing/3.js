// Lettercase Counter
// Write a function that takes a string and returns an object containing
// three properties: one representing the number of characters in the
// string that are lowercase letters, one representing the number of
// characters that are uppercase letters, and one representing the
// number of characters that are neither.
const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'];

// function letterCaseCount(str) {
//   let result = { lowercase: 0, uppercase: 0, neither: 0 };
//   for (let i = 0; i < str.length; i++) {
//     if (LETTERS.includes(str[i])) {
//       result.lowercase += 1;
//     } else if (LETTERS.includes(str[i].toLowerCase())) {
//       result.uppercase += 1;
//     } else {
//       result.neither += 1;
//     }
//   }
//   return result;
// }

function letterCaseCount(str) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= 'a') && (str[i] <= 'z')) {
      result.lowercase += 1;
    } else if ((str[i] >= 'A') && (str[i] <= 'Z')) {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  }
  return result;
}
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }