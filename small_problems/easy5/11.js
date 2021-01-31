// After Midnight (Part 1)
// The time of day can be represented as the number of minutes before
// or after midnight. If the number of minutes is positive, the time
// is after midnight. If the number of minutes is negative, the time
// is before midnight.

// Write a function that takes a time using this minute-based format
// and returns the time of day in 24 hour format (hh:mm). Your method
// should work with any integer input.

// You may not use javascript's Date class methods.

// Examples:
// 24hrs = 1440 minutes
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

// midnight 0 ==> 00:00
// -3 24:00 , moves to 23... 60-3= 57 ==> 23:57. 

//If number is greater than 0
// console.log(timeOfDay(35) === "00:35");// 0 + 35 ==> "00:35"
// console.log(timeOfDay(3000) === "02:00");// 3000 /60 = 50 hrs - 24hrs - 24 hrs = 2 hrs 
// console.log(timeOfDay(800) === "13:20"); // 800/60 = 13.33 .33*60 = 19.8 ==> "13:20"
//if greater than 1440
//take the number and divide it by 60...subtract 24 until it is less than 24.

//take the number rounded to the lowest integer and that is hours
 //take number - hours == decimal * 60... that is your minutes

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = 1440;
function timeOfDay(integer) {
  //if integer < 0, add 24 hrs until it is greater than 0
  if (integer < 0 ) {
    while (integer < 0) {
      integer += MINUTES_PER_DAY;
    }
  }
  let  hours = integer / MINUTES_PER_HOUR;
    while (hours > HOURS_PER_DAY) {
      hours -= HOURS_PER_DAY;
    }
  let hour = Math.floor(hours);
  let decimal = hours - hour;
  let minutes = Math.round(decimal * MINUTES_PER_HOUR);
  hour = padNumber(hour);
  minutes = padNumber(minutes);
  return `${hour}:${minutes}`;
}

function padNumber(num) {
  let str = num.toString();
  if (str.length === 1) {
    return '0' + str;
  }
  return str;
}
//if number is less than zero...
//add 1440 until I get a positive and then do the same...
