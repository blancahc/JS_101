// Given the following data structure, use the map method to return a new array
// identical in structure to the original but, with each the number incremented
// by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

//My solution:

//map through arr
 //for each element
  //key in object
    //key = number + 1;;
// return new array of each number + 1

arr.map(obj => {
  //obj = {b:2, c:3}
  for (let property in obj) {
    obj[property] += 1;
  }
  return obj;
});
//This solution modifies original array, which we don't want

//The Solution:
arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
}); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

arr; // => [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]
