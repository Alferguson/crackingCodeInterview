// Linear algo
// as curr item goes from left to right
// everything left of item is sorted, everything right is unsorted
// curr item is inserted into place

// Time Complexity:
// Worst Case O(n^2)
// Avg Case O(n^2)
// Best Case O(n)

// Space Complexity:
// O(n)

const insertionSort = (arr) => {

};

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return;
}

console.log*insertionSort([2, 1, 6, 3, 0, 90, 843, 21, 4, 828, 9]);