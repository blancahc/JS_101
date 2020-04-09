//Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
//This code will create a nested array that looks like this:

//["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
//Create a new array that has all of the above values, but un-nested:

//[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles']

//MY SOLUTION
flintstones = flintstones.concat(["Barney", "Betty"]);
flintstones = flintstones.concat(["Bambam", "Pebbles"]);
console.log(flintstones);

// //THE SOLUTION

// [].concat(... flintstones);