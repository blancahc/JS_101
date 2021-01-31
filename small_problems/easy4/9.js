// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size
// of "it's" is 3, not 4.

// Examples:
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');                                            // {}

function wordSizes(str) {
  let strArr = str.split(' ');
  let objCount = {};
  //iterate through array to count each word
  for (let idx = 0; idx < strArr.length; idx += 1) {
    let wordLength = getLength(strArr[idx]);
    //only count if a word exists (not a single space)
    if (!wordLength) {
      continue;
    }
    objCount[wordLength] ? objCount[wordLength] += 1 : objCount[wordLength] = 1;

  }
  return objCount;
}

function getLength(word) {
  let length = 0;
  word = word.toLowerCase();
  for (let idx = 0; idx < word.length; idx += 1) {
    if (word[idx] >= 'a' && word[idx] <= 'z') {
      length += 1;
    }
  }
  return length;
}