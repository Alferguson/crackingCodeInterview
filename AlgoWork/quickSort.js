const quickSort = (arr, start = 0, end = arr.length - 1, left = false, right = false) => {
  if (start >= end) return;
  let pivot = end;
  let partition = --end;
  for (let i = start; i <= end; i++) {
    if (i >= pivot) {
      break;
    }
    if (arr[i] > arr[pivot]) {
      let temp = arr[partition];
      let pivotTemp = arr[pivot];
      arr[partition] = arr[i];
      arr[i] = temp;
      arr[pivot] = arr[partition];
      arr[partition] = pivotTemp;
      --pivot; --partition; --i;
    }
  }
  let leftStart = 0;
  let leftEnd = pivot - 1;
  let rightStart = pivot + 1;
  let rightEnd = arr.length - 1;
  if (!right) quickSort(arr, start = leftStart, end = leftEnd, true);
  if (!left) quickSort(arr, start = rightStart, end = rightEnd, false, true);
  return arr;
}
console.log(quickSort([1, 5, 2, 3, 9, 0, 8, 4]));