//Given the following data structure write some code to return an array
// containing the colors of the fruits and the sizes of the vegetables.
// The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// MY SOLUTION
let arr = Object.entries(obj);

arr.map(el => {
  if (el[1].type === 'fruit') {
    let colors = el[1].colors;
    let upColors = colors.map(color => color[0].toUpperCase() + color.slice(1));
    return upColors;
  }
  return el[1].size.toUpperCase();
});

//THE SOLUTION
let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});

