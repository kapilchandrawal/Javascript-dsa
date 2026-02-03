// Program to implement bubble sort function that takes an array as input and
// uses nested loops to compare and swap adjacent elements until the array is sorted

function bubbleSort(arr) {
  // Make a copy of the array to avoid modifying the original array
  const n = arr.length;
  let swapped;

  // Outer loop to iterate through all elements in the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false; // Flag to optimize the sort: if no elements were swapped during an inner loop pass, the array is already sorted

    // Inner loop for comparisons and swapping
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped by inner loop, then break
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);

const sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers); // Output: Sorted array: [11, 12, 22, 25, 34, 64, 90]
