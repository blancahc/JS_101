//**1. What is the return value of the filter method call below? Why?
[1, 2, 3].filter(num => 'hi');

//My Answer:
//returns [] because the array does not have a 'hi' value

//The Answer:
//filter performs selection based on the truthiness of the callback's return
//value. In this case, the return value is always 'hi', which is truthy.
//Therefore filter will return a new array containing all of the elements in
//the original array.

//**2.What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

//My Answer:
//Returns a new array with the following values: [1, 4, 9]

//The Answer:
//[ undefined, undefined, undefined ]
//map looks at the return value of the callback function to decide the
//elements in the returned array. Each element in the original array is
//replaced by what the callback returns for that element. In this case,
//there's no explicit return statement in the callback function, which
//means that the callback returns undefined each time.

//**3. The following code differs slightly from the above code. What is the
//return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

//My Answer: It returns a new array with the following values [1, 4, 9],
//because in this case, the callback is returning each value times itself.

//The Answer: [ 1, 4, 9 ]
//Without braces surrounding the body of the arrow function, JavaScript
//uses the computed value as the return value. In this case, the callback
//returns 1, 4, and 9 on the 3 iterations.

//**4. What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop().length

//My Answer: 11
//It is the length of the poped element: 'caterpillar'

//The Answer: 11
//There are a couple of things going on here. First, pop is being called
//on the array. pop destructively removes the last element from the calling
//array and returns it. Second, length is being accessed on the return value
//by pop. Once we realize that length is evaluating the return value of pop
//('caterpillar') then the final return value of 11 should make sense.

//**5. What is the callback's return value in the following code? Also, what is
//the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

// My Answer: The callback will return each value of the original array times 2.
// every will return true because each return value of the callback is truthy

// The Answer:
// 2
// 4
// 6
// true
// The return values of the callback will be 2, 4, and 6 on the respective
// iterations. The expression num = num * 2 is an assignment expression and
// will evaluate as the expression on the right-hand side of the assignment
// and that is what gets returned in each iteration. Since all of those
// numbers are truthy values, every will return true.

//**6.How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

// My Answer: It will modify the array with the first argument given, starting
// at the position indicated by second argument until the position at the third
// arg given. It is destructive. You can find out by console.log(arr) and seeing
// it is changed.

// The Answer: By reading the documentation and trying some code in the console,
// we can determine that fill takes a value and two indices and replaces the
// indices in between those two given indices with the given value. We can also
// verify that it's a destructive method.

//**7. What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// My Answer: [undefined, undefined]
// The callback itself doesn't have a return statement; it does not have a 
// return value outside of the if statement.

// The Answer: [ undefined, 'bear' ]
// There are some interesting things to point out here. First, the return
// value of map is an array, which is the collection type that map always
// returns. Second, where did we get that undefined value? If we look at
// the if condition (elem.length > 3), we'll notice that it evaluates to
// true when the length of the element is greater than 3. In this case, the
// only value with a length greater than 3 is 'bear'. Thus, for the first
// element, 'ant', the condition evaluates to false and elem isn't returned.

// When a function doesn't explicitly return something, it implicitly returns
// undefined. That's why we see undefined as the first element of the returned
// array.

// **8. Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// Write a program that uses this array to create an object where the names are
// the keys and the values are the positions in the array:

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// My Answer:
function createObject(arr) {
  const object = {};
  arr.forEach(function(el, index) {
    object[el] = index;
  });
  return object;
}
createObject(flintstones);

// The Answer:

let flintstonesObj = {};

flintstonesObj.forEach((name, index) => {
  flintstonesObj[name] = index;
});

flintstonesObj; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

//** 9. Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// My Answer: 
let agesArray = Object.values(ages);

let agesSum = 0;

agesArray.forEach(num => {
  agesSum += num;
});

agesSum;

// The Answer:
// One solution would be to assign a variable to an initial value of 0 and then
// iterate through the object values adding each value in turn to the total.

let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
totalAges; // => 6174
// Another option would be to use Array.prototype.reduce method:

Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0); // 6174
// One slight advantage of the reduce method is that we don't have to declare
// and initialize a variable and then reassign to that value from inside the
// callback. Be sure to read the documentation on Array.prototype.reduce to see
// how it works.

// When faced with a problem such as this one, however, don't get tempted to go
// 'method hunting' to reach a solution. As demonstrated, even if you don't know
// the reduce method, the problem can be solved equally well by using forEach to
// iterate through the object values; you could even use a basic loop (while,
// for, or do/while) to achieve the same result.

//** 10. Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// My Answer:
let agesArr = Object.values(ages);
let minAge = Math.min(...agesArr);
minAge;

// The Answer:
let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10
// Recall that the Math.min function takes multiple numbers as arguments and
// returns the minimum of those numbers:

// Math.min(1, 2, 3)
// 1
// In the above example, though, we have the numbers in the agesArr array. We
// use the ... operator, called the spread operator, to convert the array to a
// list of arguments.

// **11. Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

//The output will look something like the following:

//{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// My Solution: 
// declare an object
// convert string to object to use forEach
// iterate through the string, if element is not an empty string
  //if object[el] doesn't exist, set it and make it equal 1
  //if object[el] does exist, increase by one 
// return the object

// My Solution:
let letterCount = {};
let statementArr = statement.split('');
 statementArr.forEach((el)=> {
  if(el !== ' ') {
    if(letterCount[el]) {
      letterCount[el] += 1;
    } else {
      letterCount[el] = 1;
    }
  }
 })

letterCount;





