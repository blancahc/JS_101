//The following function unnecessarily uses two return statements to return
//boolean values. How can you eliminate the unnecessary duplication?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
//Try to come up with at least two different solutions.

//MY SOLUTION

function isColorValid(color) {
  return color === "blue" || color === "green";
}

function isColorValid(color) {
  return (color ==="blue" || color === "green") ? true : false;
}

//SOLUTION
//We can simplify this function like this:

function isColorValid(color) {
  return color === "blue" || color === "green";
}
//In functions that return a boolean value, you often don't need 
//separate return statements for the true and false cases. Instead,
//you can return the value of a conditional expression directly.

//We can also use an arrow function to simplify the code even more:

const isColorValid = color => color === "blue" || color === "green";
//Another tweak you can make is to use the Array.prototype.includes method;
//this works especially well when you have more than 2 choices:

const isColorValid = color => ["blue", "green"].includes(color);
//All of these functions have the same results, but the first is the most 
//complex to read.