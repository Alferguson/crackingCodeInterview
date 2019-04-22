// 8. Merge K Arrays
// ● Question : Given k sorted arrays, merge them into a single sorted array.
// ● Eg.
// merge({{1, 4, 7},{2, 5, 8},{3, 6, 9}}) = {1, 2, 3, 4, 5, 6, 7, 8, 9}

const mergeKArrays = arrOfArrs => {
  let mergeArr = [];
  let combineLength = arrOfArrs.reduce( (accum, currVal) => accum + currVal.length, 0);
  let rowToIt = {}
  arrOfArrs.forEach( (iterator, i) => rowToIt[i] = 0);

  while (mergeArr.length !== combineLength) {
    const minAndRow = _minSubArray(rowToIt);
    rowToIt[minAndRow[1]] = rowToIt[minAndRow[1]] + 1;
    mergeArr.push(minAndRow[0]);
  }

  return mergeArr;

  function _minSubArray(rowToIt) {
    let minRow = "";
    let minVal = Number.MAX_SAFE_INTEGER;
    let currentValues = Object.keys(rowToIt).map( row => {
      return arrOfArrs[row][rowToIt[row]];
    });
    
    console.log(currentValues)
    for (let i = 0; i < currentValues.length; i++) {
      const currVal = currentValues[i];
      if (currVal < minVal) {
        minVal = currVal;
        minRow = i;
      }
    }
    console.log(`min is ${minVal} and row is ${minRow}`);

    return [minVal, minRow];
  }
}

const test1 = [
  [1, 4, 7],
  [2, 5, 8], 
  [3, 6, 9]
];

console.log(mergeKArrays(test1));