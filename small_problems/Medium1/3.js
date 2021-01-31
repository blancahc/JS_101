function rotateRightmostDigits(number, count) {
  let array =  String(number).split('');
  let num = array.splice(array.length - count, 1);
  array.push(num[0]);
  return Number(array.join(''));
}
function maxRotate(number) {
  let digitsLength = number.toString().length;
  for (let count = digitsLength; count >= 2; count -= 1) {
    number = rotateRightmostDigits(number, count);
  }
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);