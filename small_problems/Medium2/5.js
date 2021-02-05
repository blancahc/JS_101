// Next Featured Number Higher than a Given Value
// A featured number (something unique to this exercise) is an odd number
// that is a multiple of 7, with all of its digits occuring exactly once
// each. For example, 49 is a featured number, but 98 is not (it is not odd),
// 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears
// twice).

// Write a function that takes an integer as an argument, and returns the next
// featured number greater than the integer. Issue an error message if there is
// no next featured number.

// NOTE: The largest possible featured number is 9876543201.


// number +1 until it meets these conditions OR until it reaches 9876543201
  // number must be odd
  // number must be divisible by 7
  // digits must not repeat

function featured(integer) {
  let num = integer + 1;
  while (num <= 9876543201) {
    if (num % 2 === 1 && num % 7 === 0 && isUnique(num)) {
      return num;
    }
    if (num >= 9876543201) {
      return "No such number";
    }
    num += 1;
  }
  return "No such number";
}

function isUnique(num) {
  let str = num.toString();
  let numbers = {};
  for (let idx = 0; idx < str.length; idx += 1) {
    let digit = str[idx];
    if (numbers[digit]) {
      return false;
    } else {
      numbers[digit] = true;
    }
  }
  return true;
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirement