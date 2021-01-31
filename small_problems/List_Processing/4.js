// Leading Substrings
// Write a function that takes a string argument, and returns a list of all
// substrings that start from the beginning of the string, ordered from shortest
// to longest.

function leadingSubstrings(str) {
  let result = [];
  for (let idx = 1; idx <= str.length; idx += 1) {
    result.push(str.slice(0, idx));
  }
  return result;
}

// Examples:
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

