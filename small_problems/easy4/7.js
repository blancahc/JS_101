
// Write a function that takes an array of numbers, and returns an array 
// with the same number of elements, with each element's value being the
// running total from the original array.

// Examples:

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []
[2, 5, 13]
[2] /
[2, 7] // push(newArr[0] + arr[1])
[2, 7, ] //push(newArr[1] + arr[2])

function runningTotal(originalArr) {
  let newArr = [];
  if (originalArr.length === 0) {
    return newArr
  }
  newArr.push(originalArr[0]);
  for (let idx = 1; idx < originalArr.length; idx += 1) {
    newArr.push(newArr[idx - 1] + originalArr[idx]);
  }
  return newArr;
}