// write a function to reverse the string

function reverseString(str) {
  // Initialize a new, empty string to hold the reversed result
  let newString = "";

  // Loop backward through the original string
  // Start from the last character (str.length - 1)
  // Continue as long as the index (i) is 0 or greater
  // Decrement the index after each iteration
  for (let i = str.length - 1; i >= 0; i--) {
    // Append the current character to the new string
    newString += str[i];
  }

  // Return the final reversed string
  return newString;
}

// Example Usage:
const original = "hello";
const reversed = reverseString(original);
console.log(reversed); // Output: "olleh"
