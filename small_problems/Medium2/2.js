// Triangle Sides
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides
// must be greater than the length of the longest side, and every side must
// have a length greater than 0. If either of these conditions is not satisfied,
// the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as
// arguments, and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or
// 'invalid'.

// check that each number is greater than zero
  // if not -->"invalid"
//create an object and save numberInput as parameter = 1
  // if parameter exists += 1;
// if you have three parameters --> "scalene"
// if you have two parameters --> "isosceles"
// if you have one parameter --> "equilateral"
function triangle (...arguments) {
  let args = [...arguments];
  args.sort((a, b) => b - a );
  if (args.includes(0) || (args[0] > args[1] + args[2])) {
    return "invalid";
  }
  let result = [];
  result.push(args[0]);
  for (let idx = 1; idx < args.length; idx += 1) {
    if (result.includes(args[idx])) {
      continue;
    }
    result.push(args[idx]);
  }
  return triangleType(result);
}
function triangleType(array) {
  if (array.length === 1) {
    return "equilateral";
  } else if (array.length === 2) {
    return "isosceles";
  } else {
    return "scalene";
  }
}
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"