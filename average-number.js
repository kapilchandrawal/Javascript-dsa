// Program to find the average of numbers in a array.

const numbers = [10, 20, 30, 40, 50];
let sum = 0;

// Iterate through the array and add each number to the sum
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Calculate the average
const average = sum / numbers.length;

console.log(average); // Output: 30
