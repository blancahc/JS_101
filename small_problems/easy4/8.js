// Write a function that takes a string consisting of zero or more space separated
// words, and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// Examples:
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');      // {}

// Data structure
  // return an object
// Algorthim
  //convert string to array
  // determine how many letters first word has, save it to object
    // and set parameter name to "1":1
  // determine how many letters second word has, check if parameter exists,
    // create it if it doesn't exist and set it to one or if it exists += 1


function wordSizes(str) {
  let strArr = str.split(' ');
  let objCount = {};
  //iterate through array to count each word
  for (let idx = 0; idx < strArr.length; idx += 1) {
    let wordLength = strArr[idx].length;
    //only count if a word exists (not a single space)
    if (wordLength) {
      // eslint-disable-next-line no-unused-expressions
      objCount[wordLength] ? objCount[wordLength] += 1 : objCount[wordLength] = 1;
    }
  }
  return objCount;
}