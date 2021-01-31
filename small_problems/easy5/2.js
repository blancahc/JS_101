// Combining Arrays
// Write a function that takes two arrays as arguments, and returns an array
// containing the union of the values from the two. There should be no duplication
// of values in the returned array, even if there are duplicates in the original
// arrays. You may assume that both arguments will always be arrays.

//Example
// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

function union(arr1, arr2) {
  for (let idx = 0; idx < arr2.length; idx += 1) {
    if (arr1.includes(arr2[idx])) {
      continue;
    }
    arr1.push(arr2[idx]);
  }
  return arr1;
}