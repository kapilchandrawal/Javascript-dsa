// Program to merge two arrays
function mergeArraysNew(arr1, arr2) {
  const merged = [];
  let index = 0;

  // Loop through the first array and add elements to the new array
  for (let i = 0; i < arr1.length; i++) {
    merged[index++] = arr1[i];
  }

  // Loop through the second array and add elements to the new array
  for (let i = 0; i < arr2.length; i++) {
    merged[index++] = arr2[i];
  }

  return merged; // Returns a new merged array
}

// Example usage:
let arrayA = [1, 2];
let arrayB = [3, 4];
let newMergedArray = mergeArraysNew(arrayA, arrayB);
console.log(newMergedArray);
// Output: [1, 2, 3, 4]
console.log(arrayA);
// Output: [1, 2] - arrayA is unchanged
