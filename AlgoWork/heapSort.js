const heapSort = arr => {
  // this is to ensure all parent nodes are greater than or equal to their children
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i);
  }
  for (let j = arr.length - 1; j >= 0; j--) { 
    // swap root (largest value) with last child, last index of array is greatest values
    swap(arr, 0, j); 
    // minus one from heap length to ignore new values, this is to bring up top values
    heapify(arr, 0, j); 
  } 
  return arr;
}

function heapify(arr, i, heapLength = arr.length) {
  let largerIndex = i;
  let leftIndex = 2 * i + 1;
  let rightIndex = 2 * i + 2;
  if (leftIndex < heapLength && arr[leftIndex] > arr[largerIndex]) {
    largerIndex = leftIndex;
  }
  if (rightIndex < heapLength && arr[rightIndex] > arr[largerIndex]) {
    largerIndex = rightIndex;
  }
  if (largerIndex !== i) {
    swap(arr, largerIndex, i);
    heapify(arr, largerIndex, heapLength);
  }
}

function swap(arr, left, right) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return;
}

console.log(heapSort([2, 5, 1, 9, 4, 3]));
// console.log(heapSort([2, 1, 9, 4, 3]));