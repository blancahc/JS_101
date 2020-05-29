// Given the following data structure, write some code to return
// an array which contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// MY SOLUTION
arr.filter(obj => {
  let arrOfAllValues = Object.values(obj);
  let arrOfEvenValues = arrOfAllValues.
  filter(ar => ar.every(num => num % 2 === 0));
  return arrOfAllValues.length === arrOfEvenValues.length;
});

// THE SOLUTION
arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});