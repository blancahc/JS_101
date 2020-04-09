//How can you determine whether a given string ends with an exclamation mark?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

//MY SOLUTION
function checkChar(str, char) {
  return str[str.length - 1] === char;
}

checkChar(str1, '!');
checkChar(str2, '!');

//SOLUTION
str1.endsWith("!"); // true
str2.endsWith("!"); // false