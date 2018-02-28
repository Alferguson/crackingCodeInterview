// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix(matrix) {
    let newMatrixArr = [];
    let newHeight = matrix[0].length;
    let newWidth = matrix.length;
    let counter = 0;
    while (counter < newHeight) {
        let newArr = [];
        let diffCounter = 0;
        while (diffCounter < newWidth) {
            newArr.unshift(matrix[diffCounter][counter]);
            diffCounter++;
        }
        newMatrixArr.push(newArr);
        counter++;
    }
    return newMatrixArr;  
}


let matrixArr1 = [
    [1, 2, 1, 0],
    [0, 2, 1, 0],
    [0, 0, 0, 0],
    [9, 1, 2, 4]
];
let matrixArr2 = [
    [1, 2, 1, 0],
    [0, 2, 1, 0],
    [0, 0, 0, 0],
    [9, 1, 2, 4],
    [2, 4, 2, 1]
];
let matrixArr3 = [
    [1, 2, 1, 0, 1, 0],
    [0, 2, 1, 0, 2, 1],
    [0, 0, 0, 0, 4, 4],
    [9, 1, 2, 4, 5, 6],
    [2, 4, 2, 1, 4, 0]
];

console.log(rotateMatrix(matrixArr1));
console.log(rotateMatrix(matrixArr2));
console.log(rotateMatrix(matrixArr3));
