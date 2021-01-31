// Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and some
// other number, inclusive, that are multiples of 3 or 5. For instance,
// if the supplied number is 20, the result should be 98 
// (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Examples:

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

//takes an integer greater than 1
//set sum = 0;
//set current num to 1 and increase by 1 until you get to integer
//if multiple of 3 or 5, add it to the sum
//return sum
function multisum(integer) {
  let sum = 0;
  for (let currentNum = 1; currentNum <= integer; currentNum++) {
    if (currentNum % 3 === 0 || currentNum % 5 === 0) {
      sum += currentNum;
    }
  }
  return sum;
}

multisum(3);
