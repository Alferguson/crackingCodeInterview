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
const otherQuickSort = (arr, start = 0, end = arr.length - 1) => {
  if (!arr || !arr.length) return false;
  if (start >= end) return arr;

	let partition = end - 1;
	
	for (let i = start; i < partition; i++) {
		if (arr[end] <= arr[i]) {
			swap(arr, i, partition)
			--i; --partition;
    }
  }
  swap(arr, end, partition);

	quickSort(arr, start, partition - 1);
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
console.log(otherQuickSort([1,4,2, 5, 2, 8, 0]));


function mergeSort(arr) {
  const mergeArr = [];
  arr.forEach( el => mergeArr.push([el]) );

  while(mergeArr.length !== 1) {
    let combineArr = [];
    for (let i = 0; i < mergeArr.length; i++) {
      combineArr.push(combine(mergeArr[i], mergeArr[i + 1]));
    }
    mergeArr = combineArr;
  }
  return mergeArr[0];
}

function combine(leftArr, rightArr) {
  if (!rightArr) return leftArr;
  let newArr = [];
  let j = 0;
  let k = 0;
  while (j !== leftArr.length && j !== rightArr.length) {
    if (leftArr[j] > rightArr[k]) {
      newArr.push(rightArr[k]);
      k++;
    }
    else if (leftArr[j] <= rightArr[k]) {
      newArr.push(leftArr[j]);
      j++;
    }
  }
  if (j !== leftArr.length) {
    for (let i = j; i < leftArr.length; j++) {
      newArr.push(leftArr[i]);
    }
  }
  if (k !== rightArr.length) {
    for (let i = k; i < rightArr.length; i++) {
      newArr.push(rightArr[i]);
    }
  }
  return newArr;
}