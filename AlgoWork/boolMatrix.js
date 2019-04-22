// 6. Zero Matrix
// ● Question : Given a boolean matrix, update it so that if any cell is true, all the cells
// in that row and column are true.
// ● Eg.
// [true,  false, false]      [true,  true,  true ]
// [false, false, false]  ‑>  [true,  false, false]
// [false, false, false]      [true,  false, false]

const zeroMatrix = ma => {
  const rows = {};
  const columns = {};
  for (let i = 0; i < ma.length; i++) {
    for (let j = 0; j < ma[0].length; j++) {
      if (ma[i][j]) {
        rows[i] = true;
        columns[j] = true;
      }
      if (rows[i]) 
    }  
  }

}

const test1 = [
  [true,  false, false],
  [false, false, false],
  [false, false, false]``
];

console.log(zeroMatrix(test1));