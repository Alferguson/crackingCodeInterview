const mergeSort = (arr) => {
	let mergeArr = [];
	for (let i = 0; i < arr.length; i++) {
   		mergeArr.push([arr[i]]);
 	}
while(mergeArr.length !== 1) {
	let newArr = [];
for (let p = 0; p < mergeArr.length; p = p + 2) {
	newArr.push(combine(mergeArr[p], mergeArr[p+1]));
}
mergeArr = newArr;
}
	return mergeArr[0];

}

function combine(leftArr, rightArr) {
  if (!rightArr) return leftArr;
	let combineArr = [];
	let j = 0;
	let k = 0;
	while (k !== rightArr.length && j !== leftArr.length) {
		if (leftArr[j] > rightArr[k]) {
combineArr.push(rightArr[k]);
k++;
} else {
	combineArr.push(leftArr[j])
	j++;
}
}
if (k !== rightArr.length) {
	for (let n = k; n < rightArr.length; n++) {
		combineArr.push(rightArr[n]);
}
}
else if (j !== leftArr.length) {
for (let m = j; m < leftArr.length; m++) {
		combineArr.push(leftArr[m]);
}
}
return combineArr;
}


console.log(mergeSort([3, 4, 1, 9, 7, 2, 1, 9, 0]));