// Write a function that will take a short line of text, and write it to the
// console log within a box.

function logInBox(str) {
  let str1 = '';
  let str2 = '';
  for (let index = 0; index < str.length; index += 1) {
    str1 += '-';
    str2 += ' ';
  }
  console.log(`
    +-${str1}-+
    | ${str2} |
    | ${str} |
    | ${str2} |
    +-${str1}-+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
