
// Log all odd numbers from 1 to 99, inclusive, to the
// console. Log all numbers on separate lines.
let count = 1;
while (count < 99 ) {
  if (count % 2 === 1) {
    console.log(count);
  }
  count += 1;
}

for (let number = 1; number < 100; number += 2) {
  console.log(number);
}

let start = Number(prompt('I will log odd numbers. What is the starting number?'));
let end = Number(prompt('What is the ending number?'));

for (let number = start; number <= end; number += 1) {
  if (Math.abs(number) % 2 === 1) {
     console.log(number);
  }
}
