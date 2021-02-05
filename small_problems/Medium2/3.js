// Tri-Angles
// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments,
// and returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have
// to worry about floating point errors. You may also assume that the
// arguments are in degrees.
// function triangle(...args) {
//   if (args.includes(0) || args[0] + args[1] + args[2] !== 180) {
//     return "invalid";
//   }
//   let degreesObj = determineDegrees(args);
//   if (degreesObj.lessThan90 === 3) {
//     return "acute";
//   } else if (degreesObj.greaterThan90 === 1 ) {
//     return "obtuse";
//   } else {
//     return "right";
//   }
// }
// function determineDegrees(args) {
//   let degrees = { lessThan90: 0, ninety: 0, greaterThan90: 0 };
//   for (let idx = 0; idx < args.length; idx += 1) {
//     if (args[idx] === 90) {
//       degrees.ninety += 1;
//     } else if (args[idx] <= 90) {
//       degrees.lessThan90 += 1;
//     } else {
//       degrees.greaterThan90 += 1;
//     }
//   }
//   return degrees;
// }
function triangle(...args) {
  if (args.includes(0) || args[0] + args[1] + args[2] !== 180) {
    return "invalid";
  }
  if (args.includes(90)) {
    return "right";
  } else if (args.every(testAcuteTriangle)) {
    return "acute";
  }
  return "obtuse";
}

function testAcuteTriangle(angle) {
  return angle < 90;
}
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

//TOOK ME 24 MINUTES TO SOLVE