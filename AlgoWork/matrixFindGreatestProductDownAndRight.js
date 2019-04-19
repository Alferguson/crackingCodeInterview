// Question : Given a matrix, find the path from top left to bottom right with the
// greatest product by moving only down and right.

// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]

// 1 ‑> 4 ‑> 7 ‑> 8 ‑> 9
// 2016

// [‑1, 2, 3]
// [4, 5, ‑6]
// [7, 8, 9]

// ‑1 ‑> 4 ‑> 5 ‑> ‑6 ‑> 9
// 1080

const magpdar = ma => {
  if (!_errorHandling(ma)) return false;
  // store max and min values for negative cases
  const maxCache = ma.map( row => Array.from(row, () => 0));
  const minCache = ma.map( row => Array.from(row, () => 0));
  for (let i = 0; i < ma.length; i++) {
    for (let j = 0; j < ma[0].length; j++) {
      // these are `reversed` since we do a math.max at the end for them. 
      let maxVal = Number.MIN_SAFE_INTEGER;
      let minVal = Number.MAX_SAFE_INTEGER;
      const currCell = ma[i][j];

      if (i === 0 && j === 0) {
        maxVal = currCell;
        minVal = currCell;
      }

      if (i > 0) {
        const prevTopMax = maxCache[i - 1][j];
        const prevTopMin = minCache[i - 1][j];
        const tempMax = Math.max(currCell * prevTopMax, currCell * prevTopMin);
        const tempMin = Math.min(currCell * prevTopMax, currCell * prevTopMin);
        // TODO: find why this is necessary, overflow???
        maxVal = Math.max(tempMax, maxVal);
        minVal = Math.min(tempMin, minVal);
      }
      if (j > 0) {
        const prevLeftMax = maxCache[i][j - 1];
        const prevLeftMin = minCache[i][j - 1];
        const tempMax = Math.max(currCell * prevLeftMax, currCell * prevLeftMin);
        const tempMin = Math.min(currCell * prevLeftMax, currCell * prevLeftMin);
        // TODO: find why this is necessary, overflow???
        maxVal = Math.max(tempMax, maxVal);
        minVal = Math.min(tempMin, minVal);
      }
      maxCache[i][j] = maxVal;
      minCache[i][j] = minVal;
    }
  }
  return maxCache[maxCache.length - 1][maxCache[0].length - 1];

  function _errorHandling(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    return true;
  }
}

const matrixTest = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const twoByTwoMa = [
  [1, 2],
  [4, 6]
];

console.log(magpdar(matrixTest));
// console.log(magpdar(twoByTwoMa));