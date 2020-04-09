
// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5; //no

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return? empty
//No, it returns undefined although the slot is empty