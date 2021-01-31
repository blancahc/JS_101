// Stack Machine Interpretation

//n : Place a value, n, in the register. Do not modify the stack.
//PUSH : Push the register value onto the stack. Leave the value in the register.
//ADD : Pop a value from the stack and add it to the register value, storing the
// result in the register.
//SUB : Pop a value from the stack and subtract it from the register value,
// storing the result in the register.
//MULT : Pop a value from the stack and multiply it by the register value,
// storing the result in the register.
//DIV : Pop a value from the stack and divide it into the register value,
// storing the integer result in the register.
//MOD : Pop a value from the stack and divide it into the register value,
// storing the integer remainder of the division in the register.
//POP : Remove the topmost item from the stack and place it in the register.
//PRINT : Print the register value.

function miniLang(str) {
  let stack = [];
  let register = 0;
  str.split(' ').forEach(token => {
    switch(token) {
      case 'ADD':
        register += stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MULTI': 
        register *= stack.pop();
        break;
      case 'MOD':
        register = Math.floor(register % stack.pop());
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(token);
    }
  });
}
