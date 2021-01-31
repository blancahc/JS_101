const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';
  while (number > 0) {
    let remainder = number % 10;
    result = DIGITS[remainder] + result;
    number = Math.floor(number / 10);
  }
  return result;
}

function signedIntegerToString(number) {
  if (number < 0) {
    number = (-number);
    number = '-' + integerToString(number);
    return number;
  } else if (number > 0) {
    return '+' + integerToString (number);
  }
  return '0';
}
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

