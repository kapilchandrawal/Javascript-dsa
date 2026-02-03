// Program which performs selection sort on an array of comparable elements.

function selectionSort(arr) {
  const n = arr.length;
  // One by one move the boundary of the unsorted subarray
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the unsorted array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted subarray
    if (minIndex !== i) {
      // ES6 array destructuring for swapping
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// --- Example Usage ---
const numbers = [64, 25, 12, 22, 11, 90, 45, 3];
console.log("Original array:", numbers);

const sortedNumbers = selectionSort(numbers);
console.log("Sorted array:", sortedNumbers);

// Another example
const data = [5, 1, 4, 2, 8];
console.log("Original array:", data);
console.log("Sorted array:", selectionSort(data));
