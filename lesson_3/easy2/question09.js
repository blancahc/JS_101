//Write two one-line expressions to count the number of lower-case t characters
//in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

//MY SOLUTION
let countLowerCaseT = (statement) => statement.match('t').length;

countLowerCaseT(statement1);
countLowerCaseT(statement2);

//THE SOLUTION
(statement1.match(/t/g) || []).length; // => 2
(statement2.match(/t/g) || []).length; // => 0