// Program to check number is even or odd
function evn(n) {
    if (n % 2 == 0) {
      return `"${n}" is even`;
    } else {
      return `'${n}' is odd`;
    }
  }
  let result = evn(5);
  console.log(result);
  