// Write a function that takes a positive integer, n, as an argument, and
// logs a right triangle whose sides each have n stars. The hypotenuse of
// the triangle (the diagonal side in the images below) should have one end
// at the lower-left of the triangle, and the other end at the upper-right.


function createRow(rowNum, n) {
  //spaces is n-rowNum
  let numOfSpaces = n - rowNum;
  let spaces = '';
  while (spaces.length < numOfSpaces) {
    spaces += ` `;
  }
  let stars = '';
  while (stars.length < rowNum) {
    stars += '*';
  }
  return spaces + stars;
}

function triangle(n) {
  let rowNum = 1;
  while (rowNum <= n) {
  console.log(createRow(rowNum, n));
  rowNum += 1;
  }
}

triangle(3);
