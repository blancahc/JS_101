// Create a simple tip calculator. The program should prompt for a bill amount
// and a tip rate. The program must compute the tip, and then log both the tip
// and the total amount of the bill to the console. You can ignore input
// validation and assume that the user will enter numbers.

let billAmount = prompt('What is the bill?');
let tipRate = prompt('What is the tip percentage');

billAmount = Number(billAmount);
tipRate = Number(tipRate);

let tip = billAmount * (tipRate / 100);
let total = billAmount + tip;

console.log(`Your tip is ${tip.toFixed(2)}. Your total is ${total.toFixed(2)}`);