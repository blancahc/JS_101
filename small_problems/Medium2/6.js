// Sum Square - Square Sum
// Write a function that computes the difference between the square of the
// sum of the first count positive integers and the sum of the squares of
// the first count positive integers.

// save digits in array starting with 1 and ending with integer
// (sum of digits)squared - sum of (each digit squared)

function sumSquareDifference(number) {
  let integers = [];
  while (integers.length < number) {
    integers.push(integers.length + 1);
  }
  let sumSquared = (integers.reduce((acc, current) => acc + current)) ** 2;
  let squared = integers.map( el => el ** 2);
  let squaredSum = squared.reduce((acc, current) => acc + current);
  return sumSquared - squaredSum;
}
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150