// Write a function that calculates and returns the index of the
// first Fibonacci number that has the number of digits specified
// by the argument. (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.
//fibonacci saved in array [1, 1, 2, 3, 5, 8, 13, 21, ...];

//findIndex() returns the first element that tests truthy

function findFibonacciIndexByLength(givenLength) {
  let fib = [`1`,`1`];
  while (fib[fib.length - 1].length < givenLength ) {
    let nextNumber = Number(fib[fib.length - 1]) + Number(fib[fib.length - 2]);
    fib.push(String(nextNumber));
  }
  return fib.length;
}

findFibonacciIndexByLength(2);