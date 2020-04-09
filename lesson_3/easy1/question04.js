//Using the following string, create a new string that contains all lowercase
//letters except for the first character, which should be capitalized. 
//(See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.


//MY SOLUTION
munstersDescription = munstersDescription.toLowerCase();
let firstLetter = munstersDescription[0].toUpperCase();
munstersDescription.replace(munstersDescription[0], firstLetter);

//SOLUTION
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
