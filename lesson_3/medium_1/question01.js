//Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that creates the following output 10 times, with each line indented 1 space to the right of the line above it:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!


//MY SOLUTION
let count = 0;
let string = 'The Flintstones Rock!';
while (count < 10) {
  let padding = string.length + count;
  console.log(string.padStart(padding));
  count += 1;
}

//SOLUTION