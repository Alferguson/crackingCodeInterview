// Stolen from Leetcode's answer, key thing in javascript is that you have to floor division the lengths

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

class Args {
  constructor(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
  }
}

const firstArg = new Args([1, 3], [2]);
const secArg = new Args([1, 2], [3, 4]);
const thirdArg = new Args([2, 9, 20], [3, 4, 5, 6]);
const forthArg = new Args([1, 99, 100], [2, 5]);
const fifthArg = new Args([1, 2, 3, 4, 8, 90, 100], [6]);

const findMedianSortedArrays = (nums1, nums2) => {
  let greaterArr = [];
  let lesserArr = [];
  if (nums1.length > nums2.length) {
    greaterArr = nums1;
    lesserArr = nums2;
  }
  else {
    greaterArr = nums2;
    lesserArr = nums1;
  }
  const greatLen = greaterArr.length;
  const lessLen = lesserArr.length;
  let min = 0;
  let max = lessLen;
  const halfLength = (lessLen + greatLen + 1) / 2;

  while (min <= max) {
    let i = Math.floor((min + max) / 2);
    let j = Math.floor(halfLength - i);
    if (i < max && greaterArr[j - 1] > lesserArr[i]) {
      min = i + 1;
    }
    else if (i > min && lesserArr[i - 1] > greaterArr[j]) {
      max = i - 1;
    }
    else {
      let maxLeft = 0;
      if (i === 0) maxLeft = greaterArr[j-1];
      else if (j === 0) maxLeft = lesserArr[i-1];
      else maxLeft = Math.max(lesserArr[i-1], greaterArr[j-1]);
      if ( (greatLen + lessLen) % 2 === 1 ) { 
        return maxLeft; 
      }

      let minRight = 0;
      if (i === lessLen) minRight = greaterArr[j];
      else if (j === greatLen) minRight = lesserArr[i];
      else minRight = Math.min(greaterArr[j], lesserArr[i]);

      return ((maxLeft + minRight) / 2);
    }
  }
};

console.log(findMedianSortedArrays(firstArg.nums1, firstArg.nums2)); // ans: 2.0
console.log(findMedianSortedArrays(secArg.nums1, secArg.nums2)); // ans: 2.5