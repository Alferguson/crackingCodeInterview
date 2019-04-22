// 9. Matrix Search
// ● Question : Given an n x m array where all rows and columns are in sorted order,
// write a function to determine whether the array contains an element x.
// ● Eg.
// contains([1,  2,  3,  4]
//          [5,  6,  7,  8]
//          [9, 10, 11, 12]) = True

const maSearch = (ma, x, answer = false, firstRow = 0, lastCol = ma[0].length - 1) => {
  if (x === ma[firstRow][lastCol]) {
    return answer = true;
  }
  else if (x > ma[firstRow][lastCol]) {
    maSearch(ma, x, answer, firstRow, lastCol - 1);
  }
  else {
    maSearch(ma, x, answer, firstRow + 1, lastCol);
  }
  return answer;
}

const test1 = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9, 10, 11, 12]
];

console.log(maSearch(test1, 4));