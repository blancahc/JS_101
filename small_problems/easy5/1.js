// Cute Angles
// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees, and returns a string representing that angle in
// degrees, minutes, and seconds. You should use a degree symbol (˚) to represent
// degrees, a single quote (') to represent minutes, and a double quote (") to
// represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

// Examples:
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48" //43.8
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"
// Note: your results may differ slightly depending on how you round values, but
// should generally be within a second or two of the results shown.

// 30 
// return 30°00'00"
// str 30 + dec * 60 + ° + (dec) * 60

function dms (number) {
  let degreeArr = getNumberArray(number);
  let result = '';
  if (degreeArr.length === 1) {
    return `${degreeArr[0]}°00'00"`;
  }
  let minutes = calculate(degreeArr);
  let minutesArr = getNumberArray(minutes);
  let seconds = calculate(minutesArr);
  return `${degreeArr[0]}°${minutesArr[0]}'${Math.floor(seconds)}"`;
}

function getNumberArray(num) {
  return num.toString().split('.');
}
function calculate(array) {
  //[76, 73]
  if (array[1]) {
    let num = Number(`.${array[1]}`);
    return num * 60;
  }
  return 0;
}
