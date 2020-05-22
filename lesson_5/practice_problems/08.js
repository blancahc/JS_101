// Using the forEach method, write some code to output all vowels from the
// strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// My Solution
let regex = /[a,e,i,o,u]/gi;
Object.entries(obj).forEach(entry => {
  entry[1].forEach(el => console.log(el.match(regex).toString()));
});

// The Solution
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// My Solution
let regex = /[a,e,i,o,u]/gi;
Object.entries(obj).forEach(entry => {
  entry[1].forEach(el => console.log(el.match(regex).toString()));
});
