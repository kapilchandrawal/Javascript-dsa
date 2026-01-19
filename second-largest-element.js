// Find second largest element in array
let arr = [2, 1, 8, 4, 8, 7, 7, 3, 6, 7];
// let arr = [1, 2, 3, 4, 9, 5]
function sec(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest ) { //arr[i] != largest would help when duplicate elements are there in array
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let result = sec(arr);
console.log(result);
