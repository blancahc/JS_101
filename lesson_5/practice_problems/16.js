// Given the following data structure, write some code that returns an object
// where the key is the first item in each subarray, and the value is the
// second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// MY SOLUTION
let obj = { };

arr.forEach(arr => {
  obj[arr[0]] = arr[1];
});

console.log(obj);

// THE SOLUTION
let obj = {};
arr.forEach(subarray => {
  let key = subarray[0];
  let value = subarray[1];

  obj[key] = value;
});

obj;