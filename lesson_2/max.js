  let numbers = [-5, -4, -1];
  let max = numbers[0]; 
  function findGreatest(numbers) {
    numbers.forEach(num => {
      if(num > max ) {
        max = num;
      }
    });
    return max;
  }
console.log(findGreatest(numbers));