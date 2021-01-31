// Multiplicative Average
// Write a function that takes an array of integers as input, multiplies
// all of the integers together, divides the result by the number of
// entries in the array, and returns the result as a string with the
// value rounded to three decimal places.


function multiplicativeAverage(arr) {
  //Add the integers
  //divide by the number of integers
  //return result as string with the value rounded to three decimal places
  let product = 1;
  let result;
  for (let idx = 0; idx < arr.length; idx += 1) {
    product *= arr[idx];
  }
  result = (product / arr.length).toFixed(3);
  return result; 
}
// Examples:
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"