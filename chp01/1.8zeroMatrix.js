// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0. 

function zeroMatrix(matrix) {
    let matrixArr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrixArr.push([i, j]);
            }
        }
    }
    for (let k = 0; k < matrixArr.length; k++) {
        let arrayRow = matrixArr[k][0];
        let arrayColumn = matrixArr[k][1];
        // to change each element in array to 0
        for (let m = 0; m < matrix[arrayRow].length; m++) {
            matrix[arrayRow][m] = 0;
        }
        // to change each element in a column to 0
        for (let l = 0; l < matrix.length; l++) {
            matrix[l][arrayColumn] = 0;
        }
    }
    return matrix;
}


let matrixArr1 = [
    [1, 2, 1, 4],
    [4, 2, 1, 4],
    [4, 0, 8, 4], /*[2,1]*/
    [9, 1, 2, 4]
];
let matrixArr2 = [
    [1, 2, 1, 3],
    [3, 2, 1, 3],
    [3, 0, 3, 0],
    [9, 1, 6, 4],
    [2, 4, 2, 1]
];
let matrixArr3 = [
    [1, 2, 1, 4, 1, 4],
    [4, 2, 1, 4, 2, 1],
    [4, 4, 4, 4, 4, 4],
    [9, 1, 2, 4, 5, 6],
    [2, 4, 2, 1, 4, 0]
];

console.log(zeroMatrix(matrixArr1));
console.log(zeroMatrix(matrixArr2));
console.log(zeroMatrix(matrixArr3));
