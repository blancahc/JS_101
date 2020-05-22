// Given the following data structure, return a new array with the
// same structure, but with the subarrays ordered -- (alphabetically
// or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// My Solution:
arr.map(subArr => {
  if (typeof (subArr[0]) === "number") {
    return subArr.sort( (a, b) => a - b);
  } else {
    return subArr.sort();
  }
});

// The Solution:
arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

