// Google interview:

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (!arr || !arr.length) return false; 
	if (start >= end) return arr;
	let partition = end - 1;
	for (let i = start; i < partition; i++) {
    if (arr[end] <= arr[i]) {
      swap(arr, i, partition);
      --partition; --i;
    }
  }
  if (arr[end] < arr[partition]) swap(arr, end, partition);

  quickSort(arr, start,partition - 1);
  quickSort(arr, partition + 1, end);

  return arr;
}

function swap(arr, right, left) {
	const temp = arr[left];
	arr[left] = arr[right];
	arr[right] = temp;
	return;
}

console.log(quickSort([1,4,2, 5, 2, 8, 0]));
