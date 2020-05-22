// Perform the same transformation of sorting the subarrays we did in the
// previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map(subArr => {
  if (typeof (subArr[0]) === 'string') {
    return subArr.slice.sort(function(a, b) {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    });
  } else {
    return subArr.slice.sort((a, b) => a - b);
  }
});

// The Solution
arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});
