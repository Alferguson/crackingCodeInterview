// sorts data by finding smallest item and swapping it into the arr in the first unsorted location
// enumerate arr from first unsorted item to end
// ID the smallest item
// swap the smallest item with first unsorted item


// Time Complexity:
// Worst Case O(n^2)
// Avg Case O(n^2), typically better than bubble but worst than insertion
// Best Case O(n^2)

// Space Complexity:
// O(n)


const selectionSort = (arr, start = 0) => {
  if (!arr || !arr.length) return false;
  let smallest = start;
  if (start === arr.length - 1) return;
  for (let i = start; i < arr.length; i++) {
    if (arr[i] < arr[smallest]) {
      smallest = i;
    }
  }
  swap(arr, start, smallest);
  selectionSort(arr, ++start);
  return arr;
};

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return;
}

console.log(selectionSort([4, 2, 1, 7, 5, 90, 43, 11, 93, 6]));