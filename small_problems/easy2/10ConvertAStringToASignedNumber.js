function stringToInteger(str) {
  return str - 0;
}

function stringToSignedInteger(str) {
  if (str[0] === '-') {
    return -stringToInteger(str.slice(1, str.length));
  } else if (str[0] === '+') {
    return stringToInteger(str.slice(1, str.length));
  }
  return stringToInteger(str);
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

