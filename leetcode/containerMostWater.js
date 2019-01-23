// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines 
// are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms 
// a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) 
// the container can contain is 49.

// Example:

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49


/**
 * @param {number[]} heights
 * @return {number}
 */

// VERY BRUTE FORCE
const maxArea = heights => {
  let returnAns = 0;
  const highestHeight = Math.max(heights);
  for (let i = 0; i < heights.length; i++) {
    const possArea = compareArea(heights, i, highestHeight);
    returnAns = possArea > returnAns ? possArea : returnAns;
  }
  return returnAns;
};

function compareArea(heights, currIndex, highestHeight) {
  const indexHeight = heights[currIndex];
  let area = 0;
  for (let j = heights.length - 1; j > currIndex; j--) {
    const smallerHeight = Math.min(indexHeight, heights[j]);
    const newArea = smallerHeight * (Math.max(currIndex, j) - Math.min(currIndex, j));
    area = area <= newArea ? newArea : area;
    if (heights[j] === highestHeight) return area;
  }
  return area;
}

// two pointers method
const maxAreaTwoPointers = heights => {
  let ans = 0;
  let i = 0;
  let j = heights.length - 1;
  while (i !== j) {
    let leftLine = heights[i];
    let rightLine = heights[j];
    const area = (j - i) * Math.min(leftLine, rightLine); 
    ans = ans > area ? ans : area;
    if (leftLine > rightLine) j--;
    else i++;
  }
  return ans;
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxAreaTwoPointers([1,8,6,2,5,4,8,3,7]));