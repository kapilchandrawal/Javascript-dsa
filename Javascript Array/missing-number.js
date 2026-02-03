// find a missing number in a sequential array

function findMissingNumber(arr) {
  // n is the total count if no number was missing (array length + 1)
  const n = arr.length + 1;

  // Calculate the expected sum using the natural number sum formula
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of the array elements using a for loop
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  // The missing number is the difference between the expected and actual sums
  return expectedSum - actualSum;
}


const myArray = [1, 2, 4, 5, 6];
// The expected sequence is 1 to 6 (n=6), so the missing number is 3.

const missingNum = findMissingNumber(myArray);
console.log("The missing number is:", missingNum); // Output: The missing number is: 3
