//Method 1: Using Nested Loops (Brute Force)
//This method involves using two for loops to compare each element of the array with all subsequent elements.

function findDuplicates(arr) {
  let duplicates = [];
  // Outer loop iterates through each element
  for (let i = 0; i < arr.length; i++) {
    // Inner loop compares the current element (arr[i]) with the remaining elements (arr[j])
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        // Check if the duplicate has already been added to the results array
        let alreadyFound = false;
        for (let k = 0; k < duplicates.length; k++) {
          if (duplicates[k] === arr[i]) {
            alreadyFound = true;
            break; // Exit the inner check loop if found
          }
        }
        if (!alreadyFound) {
          duplicates.push(arr[i]);
        }
      }
    }
  }
  return duplicates;
}

const array = [1, 2, 3, 2, 4, 5, 4, 5];
const duplicateNumbers = findDuplicates(array);
console.log(duplicateNumbers); // Output: [2, 4, 5]

//Method 2: Using an Object as a Frequency Counter
// A more efficient traditional method uses an object as a hash map to track the frequency of each element in a single pass. This avoids the O(n^2) time complexity of nested loops.

function findDuplicatesEfficient(arr) {
  let elementTracker = {};
  let duplicates = [];

  // Iterate through the array once
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (elementTracker[item]) {
      // If the key already exists and hasn't been recorded as a duplicate yet, it's a duplicate
      if (!duplicates.includes(item)) {
        // Using includes is an array method, but for a simple case like this...
        duplicates.push(item);
      }
    } else {
      // Otherwise, mark its first occurrence
      elementTracker[item] = true;
    }
  }

  return duplicates;
}

const array2 = [1, 2, 3, 2, 4, 5, 4, 5];
const duplicateNumbers2 = findDuplicatesEfficient(array2);
console.log(duplicateNumbers2); // Output: [2, 4, 5]
