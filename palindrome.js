//Palindrome Program
function palindrome(str) {
  let reversedStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }
  if (str === reversedStr) {
    return `${str} is a palindrome`;
  } else {
    return `${str} is not a palindrome`;
  }
}
let result = palindrome("level"); //madam, racecar, radar
console.log(result);

//A palindrome is a word, number, or sequence that reads the same backward as forward
// Examples include words like “level” or numbers like “121”
