// List of Digits
// Write a function that takes one argument, a positive integer, and returns
// a list of the digits in the number.

// function digitList(integer) {
//  let string = integer.toString();
//  let array = string.split('');
//  for (let idx = 0; idx < array.length; idx += 1) {
//    array[idx] = Number(array[idx]);
//  }
//  return array;
// }
//Examples:
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

function digitList(integer) {
 let array = integer.toString().split('');
 return array.map(el => Number(el));
}