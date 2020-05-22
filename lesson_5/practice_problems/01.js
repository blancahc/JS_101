// How would you order the following array of number strings by descending
//numeric value (largest number value to smallest)?
let arr = ['10', '11', '9', '7', '8'];

// My Solution:
arr.sort((a,b) => b - a);
// returns: ["11", "10", "9", "8", "7"]

// The Solution
arr.sort((a, b) => Number(b) - Number(a));