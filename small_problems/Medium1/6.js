//Fibonocci

function fibonacci(nth) {
  if ( nth <= 2) {
    return 1;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}
fibonacci(20);
// n = 1 --> 1
// n = 2 --> 1
// n = 3 --> 2
// n = 4 --> 3
// n = 5 --> 5
