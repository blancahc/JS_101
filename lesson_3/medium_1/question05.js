//What will the following two lines of code output?

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
//Don't look at the solution before you answer.

//MY SOLUTION
//first line will output 0.9
//second line will out put true

//THE SOLUTION
//If you thought that the outputs would be 0.9 and true, respectively, you
//were wrong. JavaScript uses floating point numbers for all numeric operations.
//Most floating point representations used on computers lack a certain amount of
//precision, and that can yield unexpected results like these.

//In this case, the output was:
//0.8999999999999999
//false