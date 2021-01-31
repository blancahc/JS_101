// Staggered Caps (Part 2)
// Modify the function from the previous exercise so it ignores non-alphabetic
// characters when determining whether it should uppercase or lowercase each
// letter. The non-alphabetic characters should still be included in the return
// value; they just don't count when toggling the desired case.

//convert to array
//first char with letter, make index 0, if not letter continue
//capitalize chars with even index
//leave non characters alone
//lowercase odd index
function staggeredCase(words) {
  let letterIdx = 0;
  return words
    .split('')
    .map((char, index) => {
      if ((char.toLowerCase() >= 'a') && (char.toLowerCase() <= 'z')) {
        if (letterIdx % 2 === 0) {
          letterIdx += 1;
        return char.toUpperCase();
      } else {
        letterIdx += 1;
        return char.toLowerCase();
      }
      } else {
        return char;
      }
    })
    .join('');
}
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);