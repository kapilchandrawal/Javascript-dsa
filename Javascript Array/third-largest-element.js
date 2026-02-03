/*Finds the third largest element in an array without using built-in methods.*/

function findThirdLargest(arr) {
  if (!arr || arr.length < 3) {
    return null; // Not enough elements to have a third largest
  }

  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (currentElement > first) {
      // New first largest
      third = second;
      second = first;
      first = currentElement;
    } else if (currentElement > second && currentElement !== first) {
      // New second largest
      third = second;
      second = currentElement;
    } else if (
      currentElement > third &&
      currentElement !== second &&
      currentElement !== first
    ) {
      // New third largest
      third = currentElement;
    }
  }

  // Check if a valid third largest was found (handles cases with fewer than 3 unique elements)
  if (third === -Infinity) {
    return null;
  }

  return third;
}

// --- Example Usage ---

const array1 = [10, 3, 4, 20, 5, 20, 10];
const array2 = [5, 5, 5];
const array3 = [1, 2];
const array4 = [12, 13, 1, 10, 34, 1];

console.log(`Third largest in [${array1}] is: ${findThirdLargest(array1)}`); // Output: 5
console.log(`Third largest in [${array2}] is: ${findThirdLargest(array2)}`); // Output: null (only one unique element)
console.log(`Third largest in [${array3}] is: ${findThirdLargest(array3)}`); // Output: null (fewer than 3 elements)
console.log(`Third largest in [${array4}] is: ${findThirdLargest(array4)}`); // Output: 12
