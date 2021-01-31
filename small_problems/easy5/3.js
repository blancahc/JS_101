// Halvsies
// Write a function that takes an array as an argument, and returns an array
// that contains two elements, each of which is an array. Put the first half
// of the original array elements in the first element of the return value,
// and put the second half in the second element. If the original array
// contains an odd number of elements, place the middle element in the first
// half array.

// Examples:

// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

// create a new array
//Divide the length of the orignal array by 2
  //round to the nearest whole integer
// put first group of elements into subArray1, push to newArr
//put the second group of elements into subArray2, push to newArr
//Return the newArr

function halvsies(array) {
  let firstHalf = Math.ceil(array.length / 2);
  let secondHalf = array.length - firstHalf;
  let newArr = [];
  let subArr1 = [];
  let subArr2 = [];
  for (let idx = 0; idx < firstHalf; idx += 1) {
    subArr1.push(array[idx]);
  }
  newArr.push(subArr1);
  for (let idx = 0; idx < secondHalf; idx += 1) {
    subArr2.push(array[firstHalf]);
    firstHalf += 1;
  }
  newArr.push(subArr2);
  return newArr;
}