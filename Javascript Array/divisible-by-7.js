//Check if a number is divisible by 7

function isDivisibleBy7(n) {
  // handle negative numbers
  if (n < 0) n = -n;

  while (n > 0) {
    n = n - 7;
  }

  return n === 0;
}
isDivisibleBy7(14); // true
isDivisibleBy7(15); // false
isDivisibleBy7(0); // true
