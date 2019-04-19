// find median of 2 sorted arrays
const median = (arr1, arr2) => {
  if (_errorChecking(arr1, arr2)) return false;
  const median1 = _getMedian(arr1);
  const median2 = _getMedian(arr2);
  if (median1 === median2) {
    return median1;
  }
  else if (median1 > median2) {

    return median(_splitArr(arr1, 0, Math.ceil(arr1.length / 2)), 
      _splitArr(arr2, Math.floor(arr2.length / 2), arr2.length));
  }
  else {
    return median(_splitArr(arr1, 0, Math.ceil(arr1.length / 2)), 
      _splitArr(arr2, Math.floor(arr2.length / 2), arr2.length));
  }
}

function _getMedian(arr) {
  if (arr.length % 2 === 0) {
    return (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
  }
  return arr[Math.floor(arr.length / 2)];
}

function _errorChecking(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (!arr1.length) return false;
}
function _splitArr(arr, start, end) {
  return (arr.splice(start, end));
}

const testArr1 = [1,2,5];
const testArr2 = [2,4,6];

const testArr3 = [1, 2, 3, 4, 5, 6];
const testArr4 = [0, 0, 0, 0, 10, 10];
console.log(median(testArr1, testArr2)); // 3.5
console.log(median(testArr3, testArr4)); // 3.5