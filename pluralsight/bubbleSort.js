// compare each arr item to it's right neighbor
// if the right neighbor < current, swap(right, left)
// repeat for the rest of arr
// at end repeat again until bool for swap happened is false

// Time Complexity
// Worst Case (Large N, unsorted): O(n^2)
// Avg Case (Large N, unsorted): O(n^2)
// Best Case (Small N, nearly sorted): O(n)

// Space Complexity
// O(n), from pluralsight: 
// "Bubble sort operates directly on the input arr meaning it is good for minimizing space"
const bubbleSort = (arr, end = arr.length) => {
  if (!arr || !arr.length) return false;
  let swapped = false;
  for (let i = 0; i < end; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
      swapped = true;
    }
  }
  if (swapped) bubbleSort(arr, end - 1);
  return arr;
};

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return;
}

console.log(bubbleSort([4, 2, 1, 7, 5, 90, 43, 11, 93, 6]));