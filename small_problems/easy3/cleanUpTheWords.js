
// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that
// string with all of the non-alphabetic characters replaced by
// spaces. If one or more non-alphabetic characters occur in a
// row, you should only have one space in the result (i.e., the
// result string should never have consecutive spaces).

//Example:
//cleanUp("---what's my +*& line?");    // " what s my line "

// first replace all non letters with spaces
  // convert string to array
  // remove non letters and replace with a space
// then remove extra spaces if consecutive spaces
  //convert array back to string and return

// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
// 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// function replaceNonAlphabetic (str) {
//   let strArray = str.split('');
//   let newArr = [];
//   strArray.forEach(char => {
//     if (letters.includes(char.toLowerCase())) {
//       newArr.push(char);
//     } else {
//       newArr.push(' ');
//     }
//   });
//   return newArr;
// }

// function removeExtraSpaces (arr) {
//  let start = 0;
//  let next = 1;
//  let newArr = [];
//  while (start < arr.length) {
//    if (arr[start] === ' ' && arr[next] === ' ') {
//      //create a new array by copying first array, but skip consecutive spaces
//      start += 1;
//      next += 1;
//    } else {
//      newArr.push(arr[start]);
//      start += 1;
//      next += 1;
//    }
//  }
//  return newArr;
// }

// function cleanUp(str) {
//   let strArr = replaceNonAlphabetic(str);
//   strArr = removeExtraSpaces(strArr);
//   return strArr.join('');
// }
// cleanUp("---what's my +*& line?");    // " what s my line "

function cleanUp(str) {
 str = str.toLowerCase();
 console.log(str);
 let newStr = '';
 for (let idx = 0; idx < str.length; idx += 1) {
   if (str[idx] >= 'a' && str[idx] <= 'z') {
    newStr += str[idx];
   } else if (newStr[newStr.length - 1] !== ' ') {
       newStr += ' ';
     }
    }
    return newStr;
}

cleanUp("---what's my +*& line?");    // " what s my line "

