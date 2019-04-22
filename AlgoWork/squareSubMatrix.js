// 7. Square Submatrix
// ● Question: Given a 2D array of 1s and 0s, find the largest square subarray of all
// 1s.
// ● Eg. Given a 2D array of 1s and 0s, find the largest square subarray of all 1s

const squareSubmatrix = (ma) => {
  // iterate over rows
  let subMatrixRowPosition;
  let numOf1s = 0;
  for (let i = 0; i < ma.length; i++) {
    let compareNumOf1s = 0;
    // iterate over columns
    for (let j = 0; j < ma[i].length; j++) { 
      if (ma[i][j] === 1) {
        compareNumOf1s++;
      }
    }  
    if (compareNumOf1s > numOf1s) {
      numOf1s = compareNumOf1s;
      subMatrixRowPosition = i;
    }  
  }
  return subMatrixRowPosition;
}

const test1 = [
  [1, 0, 1, 1, 1], 
  [1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
];

console.log(squareSubmatrix(test1)); // 2