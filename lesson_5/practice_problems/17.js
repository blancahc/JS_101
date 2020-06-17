//Each UUID consists of 32 hexadecimal characters (the digitis 0-9 and the
// letters a-f) represented as a string. The value is typically broken into
// 5 sections in an 8-4-4-4-12 pattern, e.g., 
// 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

//Write a function that takes no parameters and returns a UUID.

//MY SOLUTION:
const characters = '0123456789abcdefghijklmnopqrstuvwxyz';

let pattern = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';

let UUID = '';
function getRandom() {
  return Math.floor(Math.random() * 37);
}

for (let i = 0; i < pattern.length; i += 1) {
  if (pattern[i] === '-') {
    UUID += '-';
  } else {
    let index = getRandom();
  UUID += `${characters[index]}`;
  }
}

console.log(UUID);

//THE SOLUTION:
function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}