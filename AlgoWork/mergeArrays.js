// 10. Merge Arrays
// ● Question : Given 2 sorted arrays, A and B, where A is long enough to hold the
// contents of A and B, write a function to copy the contents of B into A without
// using any buffer or additional memory.
// ● Eg.
// A = {1,3,5,0,0,0}
// B = {2,4,6}
// mergeArrays(A, B)
// A = {1,2,3,4,5,6}

const mergeArrays = (longArr, shortArr) => {
  let i = 0;
  for (let j = 0; j < shortArr.length; j++) {
    while (i !== longArr.length) {
      if (shortArr[j] < longArr[i]) {
        _insertAtIndex(shortArr[j], longArr, i);
        break;
      }
      else if (i === longArr.length - 1) {
        longArr[i] = shortArr[j];
        break;
      }
      else {
        i++;
      }
    }
  }
  return longArr;

  function _insertAtIndex(value, insertArr, insertPos) {
    let k = insertArr.length - 1;
    while (k !== insertPos) {
      insertArr[k] = insertArr[k - 1];
      k--;
    }
    insertArr[insertPos] = value;
    return insertArr;
  }
}

const test1 = [1,3,5,0,0,0];
const test2 = [2,4,6];

console.log(mergeArrays(test1, test2));