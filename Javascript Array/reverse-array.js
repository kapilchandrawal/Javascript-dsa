//Write a program to reverse an array
function reverseArray(arr) {
  let temp = [];
  for (i = arr.length - 1; i >= 0; i--) {
    temp = temp + arr[i];
  }

  return temp;
}
let arr = [1, 2, 3, 4, 5]
let result = reverseArray(arr);
console.log(result);
