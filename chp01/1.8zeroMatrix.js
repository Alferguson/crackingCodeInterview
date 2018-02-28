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
        console.log(matrixArr[k][0])
        matrix[matrixArr[k][0]].forEach(element => {
            element = 0;
        });
        for (let l = 0; l < matrix.length; l++) {
            matrix[l][matrixArr[k][1]] = 0;
        } 
    }
    return matrix;
}


let matrixArr1 = [
    [1, 2, 1, 4],
    [4, 2, 1, 4],
    [4, 4, 0, 4],
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
