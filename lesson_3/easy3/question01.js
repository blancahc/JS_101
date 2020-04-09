//Write four different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

//MY SOLUTION
numbers.length = 0;

numbers = [1, 2, 3, 4];
for (let i = numbers.length; i > 0; i -= 1) {
  numbers.pop();
}

numbers = [1, 2, 3, 4];
for (let i = numbers.length; i > 0; i -= 1) {
  numbers.shift();
}

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);

//SOLUTION

numbers = [];

numbers.length = 0;

numbers.splice(0, numbers.length);

while (numbers.length) {
  numbers.pop();
}