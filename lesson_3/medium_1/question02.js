//Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";
//Return a new string that swaps the case of all of the letters:

//`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

//MY SOLUTION
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

munstersDescription = "The Munsters are creepy and spooky.".split('');

for (let i = 0; i < munstersDescription.length; i += 1) {
  if (upperCase.includes(munstersDescription[i])) {
    munstersDescription[i] = munstersDescription[i].toLowerCase();
  } else {
    munstersDescription[i] = munstersDescription[i].toUpperCase();
  }
}

console.log(munstersDescription.join(''));

//THE SOLUTION
// munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join("");

//Bonus Answer:
//It determines whether the result of the division is an integer -- if the
//number has no remainder, the result is an integer, so the number divided by 
//the divisor is a factor.