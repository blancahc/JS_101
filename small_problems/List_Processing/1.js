// Sum Of Digits
// Write a function that takes one argument, a positive integer, and returns
// the sum of its digits. Do this without using for, while, or do...while
// loops - instead, use a series of method calls to perform the sum.

function sum(integer) {
  let arrayOfNums = integer.toString().split('');
  const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
  return arrayOfNums.reduce(reducer);
}
// Examples:
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
