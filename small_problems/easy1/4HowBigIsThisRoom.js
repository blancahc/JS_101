// How big is the room?
// Build a program that asks the user to enter the length and
// width of a room in meters, and then logs the area of the room
// to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time.
// Use the readlineSync.prompt method to collect user input.

//Example:
// Copy Code
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

let readline = require("readline-sync");

const CONVERSION_FROM_METERS_TO_FEET = 10.7639;

console.log("Enter the lenght of the room in meters:")
let length = readline.prompt();

console.log("Enter the width of the room in meters:");
let width = readline.prompt();

length = Number(length);
width = Number(width);

let areaInMeters = (length * width).toFixed(2);
let areaInFeet = (areaInMeters * CONVERSION_FROM_METERS_TO_FEET).toFixed(2);

console.log(`Area in squared meters = ${areaInMeters}`);
console.log(`Area in squared feet = ${areaInFeet}`);
