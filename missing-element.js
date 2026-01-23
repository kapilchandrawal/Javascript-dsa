// Implement a function to find missing element in sorted array

function findMissingElement(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return undefined;
  }

  // Iterate through the array up to the second-to-last element
  for (let i = 0; i < arr.length - 1; i++) {
    // Check if the difference between the current element and the next element is not 1
    if (arr[i + 1] - arr[i] !== 1) {
      // The missing element is the current element plus one
      return arr[i] + 1;
    }
  }

  // If no missing element is found within the sequence, return undefined
  return undefined;
}

// --- Example Usage ---

const array1 = [1, 2, 3, 4, 6, 7, 8];
const missing1 = findMissingElement(array1);
console.log(`The missing element in [${array1}] is: ${missing1}`); // Output: The missing element in [1, 2, 3, 4, 6, 7, 8] is: 5

const array2 = [10, 11, 12, 14, 15];
const missing2 = findMissingElement(array2);
console.log(`The missing element in [${array2}] is: ${missing2}`); // Output: The missing element in [10, 11, 12, 14, 15] is: 13

const array3 = [1, 2, 3, 4, 5];
const missing3 = findMissingElement(array3);
console.log(`The missing element in [${array3}] is: ${missing3}`); // Output: The missing element in [1, 2, 3, 4, 5] is: undefined
