Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

//Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

//[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

// MY SOLUTION
arr.sort((a, b) => {
  let sumOfOddA = a.filter(el=> el % 2 !== 0).reduce((accumulator, currentValue) => accumulator + currentValue);
  let sumOfOddB = b.filter(el=> el % 2 !== 0).reduce((accumulator, currentValue) => accumulator + currentValue);
  return sumOfOddA - sumOfOddB;
});

// THE SOLUTION
arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});