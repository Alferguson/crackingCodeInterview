const mergeSort = arr => {
  // this arr will be a return arr
  let mergeArr = [];

  // create an array of arrays so our combine function doesn't need a
  // number handler
	arr.forEach( num => mergeArr.push([arr[i]]));

  // mergeArr will be completed if its length is 0, with each merge, it's length
  // is halved
  while(mergeArr.length !== 1) {
    // newArr is what will become of mergeArr
    let newArr = [];

    // for each +2 index, combine values of 1st and 2nd index into newArr
    for (let i = 0; i < mergeArr.length; i = i + 2) {
      newArr.push(combine(mergeArr[i], mergeArr[i + 1]));
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
    } 
    else {
      combineArr.push(leftArr[j])
      j++;
    }
  }
  if (k !== rightArr.length) {
    for (let i = k; i < rightArr.length; i++) {
      combineArr.push(rightArr[i]);
    }
  }
  else if (j !== leftArr.length) {
    for (let i = j; i < leftArr.length; i++) {
      combineArr.push(leftArr[i]);
    }
  }
  return combineArr;
}

console.log(mergeSort([3, 4, 1, 9, 7, 2, 1, 9, 0]));