//To implement the insertion sort algorithm in JavaScript, you can define a function that iterates through
//  the array and inserts each element into its correct position within the sorted portion of the array.

//Insertion Sort Function Implementation
// Here is a function insertionSort(arr) that sorts an array of numbers using the insertion sort algorithm:

function insertionSort(arr) {
  const n = arr.length;

  // Start from the second element (index 1) as the first element is
  // trivially considered sorted.
  for (let i = 1; i < n; i++) {
    // Pick the element to be inserted
    let currentElement = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than currentElement,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into its correct position in the sorted subarray
    arr[j + 1] = currentElement;
  }

  return arr;
}

// Example 1: Basic usage
const numbers1 = [12, 11, 13, 5, 6];
console.log("Original array:", numbers1);
const sortedNumbers1 = insertionSort(numbers1);
console.log("Sorted array:", sortedNumbers1);
// Output: Sorted array: [5, 6, 11, 12, 13]

// Example 2: Another example with different numbers
const numbers2 = [64, 25, 12, 22, 11];
console.log("\nOriginal array:", numbers2);
const sortedNumbers2 = insertionSort(numbers2);
console.log("Sorted array:", sortedNumbers2);
// Output: Sorted array: [11, 12, 22, 25, 64]
