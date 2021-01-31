// Grocery List
// Write a function that takes a grocery list (a two-dimensional array)
// with each element containing a fruit and a quantity, and returns a
// one-dimensional array of fruits, in which each fruit appears a number
// of times equal to its quantity.

function buyFruit(arr) {
  let result = [];
 arr.forEach(el => {
   let times = 1;
   while (times <= el[1]) {
     result.push(el[0]);
     times++;
   }
 });
 return result;
}
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

