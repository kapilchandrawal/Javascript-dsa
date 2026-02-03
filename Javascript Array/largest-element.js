//Program to find largest element
function findHighest(arr) {
  if (!arr || arr.length === 0) {
    return undefined; // Handle empty or invalid input
  }
  let max = arr[0]; // Start with the first element

  // Iterate from the second element
  for (i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // Use built-in function to find the maximum value
  //   return Math.max(...arr);

  return max; // Return the result after the loop completes
}
let arr = [2, 1, 8, 4, 3, 6, 7];
let result = findHighest(arr);
console.log(result);
