// How Many?
// Write a function that counts the number of occurrences of each
// element in a given array. Once counted, log each element alongside
// the number of occurrences. Consider the words case sensitive 
//e.g. ("suv" !== "SUV").

Example:

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

//Data structure 
  //object

//Check if item exists
  // if it doesn't
    // save each item as property name = 'item' , value= 1
  // if it does, increase it's value by 1

// console.log item and occurrences

function countOccurrences(arr) {
  let itemsObj = {};
  arr.forEach(element => {
    if (itemsObj[element]) {
      itemsObj[element] += 1;
    } else {
      itemsObj[element] = 1;
    }
  });
  for (const property in itemsObj) {
    console.log(`${property}: ${itemsObj[property]}`)
  }
}
