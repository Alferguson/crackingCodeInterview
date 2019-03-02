// divide and conquer
// pick a pivot and partition the arr
// put all values before the pivot to the left and above to the right
// pivor point is not sorted
// perform pivor and partition algo on the left and right partitions
// repeat

// Time Complexity:
// Worst Case O(n^2), not good for large pathologically sorted (inverse sorted) data sets
// Avg Case O(n log n), good for large sorted N
// Best Case O(n log n), very good for small N and nearly sorted data sets

// Space Complexity:
// O(n), watch out for stack and array space


const quickSort = (arr, start = 0) => {
  if (!arr || !arr.length) return false;
  
  quickSort(arr, ++start);
  return arr;
};

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return;
}

console.log(quickSort([4, 2, 1, 7, 5, 90, 43, 11, 93, 6]));