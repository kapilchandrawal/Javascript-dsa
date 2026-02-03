// Problem:  Given an array of non-negative integers representing an elevation map where the width of each bar is 1,
//           compute how much water it can trap after raining.
// Solution: This problem can be solved efficiently using a two-pointer approach,
//           keeping track of the maximum height on both the left and right sides as the pointers move inward.

function trap(height) {
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        trappedWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        trappedWater += rightMax - height[right];
      }
      right--;
    }
  }
  return trappedWater;
}

const elevations = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(elevations)); // Output: 6
