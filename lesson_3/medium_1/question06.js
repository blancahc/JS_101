//What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);
//Bonus:
//How can you reliably test if a value is NaN?

//MY SOLUTION
//It will log false
//isNaN(nanArray)

//THE SOLUTION
//The output is false. NaN -- not a number -- is a special numeric value 
//that indicates that an operation that was intended to return a number 
//failed. JavaScript doesn't let you use == and === to determine whether
//a value is NaN.

//Bonus Answer:

//To test whether the value is NaN, we use the isNaN() function:

//console.log(isNaN(nanArray[0])); // true
