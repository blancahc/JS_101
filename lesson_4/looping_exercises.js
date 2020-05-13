//1. Loop and Log
  //Add some code inside of the for loop below that logs the current value
  //of i to the console on each iteration. Before you run the code: What
  //sequence of numbers do you expect to be logged? Answer: 0, 2, 4, 6, 8, 10
  let i;
  for (i = 0; i <= 10; i += 2) {
    console.log(i);
  }

//2. Countdown
  //The code below logs the numbers from 1 to 10. Change it, so that it instead logs
  //the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.
  let i;
  for (i = 10; i >= 1; i -= 1) {
    console.log(i);
  }
console.log('Launch!');

//3. Triple Greeting
  //Write a loop that logs greeting three times.

  let greeting = 'Aloha'
  let count = 0;
  while (count < 3) {
    console.log(greeting);
    count += 1;
  }

//4. Take Two
  //Write a for loop that iterates over all numbers from 1 to 100, and outputs the
  //result of multiplying each element by 2.

  for (let i = 1; i <= 100; i += 1) {
    console.log(i*2);
  }

//5. Looping Over Array Methods
  //Using the code below as a starting point, write a while loop that logs the
  //elements of array at each index, and terminates after logging the last element
  //of the array.
  let array = [1, 2, 3, 4];
  let index = 0;

  while (index < array.length) {
    console.log(array[index]);
    index += 1;
  }

//6. Continue
  //write a for loop that loops over the elements of the array cities and logs the
  //length of each string to the console. If the element is null, skip forward to
  //the next iteration without logging anything to the console.
  let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

  for (let i = 0; i < cities.length; i += 1) {
    if (cities[i] === null) continue; 
    console.log(cities[i]); 
  }

//7. And on and on and on
  //The following code keeps looping forever. (You can hit Ctrl-C to stop it.)
  //Why is that? Also modify it so that it stops after the first iteration.
  //Answer: because there is no conditional statement for when to stop the loop
  let i;

  for (i = 0; i < 1; i += 1) {
    console.log("and on");
  }

//8. That's Odd
  //Write a while loop that logs all odd natural numbers between 1 and 40.

  let number = 1;

  while (number < 40) {
    console.log(number);
    number += 2;
  }

//9. Finding Nemo
  //Loop over the elements of the array fish, logging each one. Terminate
  //the loop immediately after logging the string 'Nemo'.

  let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

  for (let index = 0; index < fish.length; index += 1) {
    console.log(fish[index]);
    if (fish[index] === 'Nemo') break;
  }

//10. What is the difference between the following two code snippets? Check the MDN
//documentation on while and do...while.

  //Answer: This one first checks the conditional and then console logs 'Woooot!
  //Therefore, nothing is logged
  let counter = 0;
  
  while (counter > 0) {
    console.log('Woooot!');
    counter -= 1;
  }

  //Answer: This one first console logs 'Woooot!' and then checks the conditional. 
  //The result is:
  //'Woooot!'
  let counter = 0;
  
  do {
    console.log('Woooot!');
    counter -= 1;
  } while (counter > 0);

