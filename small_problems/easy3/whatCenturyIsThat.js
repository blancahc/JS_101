// Write a function that takes a year as input and returns the century.
// The return value should be a string that begins with the century number,
// and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

//New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century.

Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

 //anything ending in 1, add 'st', not if digit that preceeds it was 1
 //anything ending in 2, add `nd`, not if digit that preceeds it was 1
 //if 3, then 'rd', except if digit that preceeds it was 1

function century (year) {
  let century = Math.ceil(year / 100);
  let centuryStr = century.toString();
  let last = centuryStr[centuryStr.length - 1];
  let secondToLast = centuryStr[centuryStr.length - 2];
  if (last === '1' && secondToLast !== '1') {
    centuryStr += 'st';
  } else if (last === '2' && secondToLast !== '1') {
    centuryStr += 'nd';
  } else if (last === '3' && secondToLast !== '1') {
    centuryStr += 'rd';
  } else {
    centuryStr += 'th';
  }
  return centuryStr;
}