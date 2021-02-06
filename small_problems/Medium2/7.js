// Bubble Sort
//Iterate through array
//Compare 1 to 2
//If 1 > 2, swap
 // move to next index
  //If 1>2 swap
//Move to the beginning of array and repeate
//If you move through array without swapping, you are done.

//Input: array
//Output: that same array sorted

function bubbleSort(arr) {
  let sorted;
  do {
    sorted = sort(arr);
  } while (sorted === true);

  return arr;
}


function sort(arr) {
  let swap = false;
  arr.forEach((el, idx, arr) => {
    let next = arr[idx + 1];
    if (el > next) {
      arr[idx] = next;
      arr[idx + 1] = el;
      swap = true;
    }
  });
  return swap;
}

let array1 = [5, 3];
console.log(bubbleSort(array1));
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]