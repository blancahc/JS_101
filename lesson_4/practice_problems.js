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

// **6. How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);