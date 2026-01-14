//Write a program for subracting elements and also check element is greater or smaller
function Subtract(a, b) {
  if (a >= b) {
    return a - b;
  } else {
    return b - a;
  }
}
let result = Subtract(14, 31);
console.log(result);
