// Matching Parentheses?
// Write a function that takes a string as argument, and returns true if all
// parentheses in the string are properly balanced, false otherwise. To be
// properly balanced, parentheses must occur in matching '(' and ')' pairs.

//Examples:
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// first create an array with just '(' or ')'
// check if first is '(' and followed by ')'.
function isBalanced(str) {
  let arr = str.split('');
  let parArr = arr.filter(char => char === '(' || char === ')');
  if (parArr[0] === ')' || parrArr[parArr.length - 1] === '(') {
    return false;
  }
  let countOfOpen = 0;
  let countOfClose = 0;
  for (let idx = 0; idx < parArr.length; idx += 1) {

    if (parArr[idx] === '(') {
      countOfOpen += 1;
    }
    if (parArr[idx] === ')') {
      countOfClose += 1;
    }
  }
  if (countOfClose === countOfOpen) {
    return true;
  } else {
    return false;
  }
}


