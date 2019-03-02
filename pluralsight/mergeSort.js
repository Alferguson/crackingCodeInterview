// divide and conquer
// arr is cut in half recursively until groups of one
// then reconstructure arr

// Time Complexity:
// Worst Case O(n log n), good for large unsorted N, data splitting allows for parallel on multiple diff CPUs
// Avg Case O(n log n), good for large unsorted N
// Best Case O(n log n), good for large unsorted N

// Space Complexity:
// O(n), it can be performed in place tho not common, if its arr allocation instead of inplace, its heavier


const mergeSort = (arr, start = 0) => {
  if (!arr || !arr.length) return false;
  
  mergeSort(arr, ++start);
  return arr;
};

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return;
}

console.log(mergeSort([4, 2, 1, 7, 5, 90, 43, 11, 93, 6]));