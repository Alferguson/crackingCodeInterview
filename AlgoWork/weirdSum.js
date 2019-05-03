// 19. Sum
// ● Question : Given two integers, write a function to sum the numbers 
// without using any arithmetic operators.

// const sum = (num1, num2) => {
//   let carryOver = false;
//   const result = [];
//   const num1BinaryArr = num1.toString(2).split("");
//   const num2BinaryArr = num2.toString(2).split("");
//   let i = num1BinaryArr.length - 1;
//   let j = num2BinaryArr.length - 1;
//   console.log(num1BinaryArr);
//   console.log(num2BinaryArr);
//   while(i >= 0 || j >= 0) {
//     if (num1BinaryArr[i] === 1 && num2BinaryArr[j] === 1) {
//       result.unshift( carryOver ? 1 : 0);
//       carryOver = true;
//     }
//     else if (num1BinaryArr[i] === 1 || num2BinaryArr[j] === 1) {
//       result.unshift( carryOver ? 1 : 0);
//       carryOver = false;
//     }
//     // if both are 0
//     else {
//       result.unshift( carryOver ? 0 : 1);
//       carryOver = false;
//     }
//     i--;
//     j--;
//   }

//   if (i >= 0) {
//     for (let k = i; k >= 0; k--) {
//       result.unshift(carryOver ?  : num1BinaryArr[k])
//       if (carryOver) carryOver = false;
//     }
//   }
//   else if (j >= 0) {
//     for (let k = j; k >= 0; k++) {
      
//       if (carryOver) carryOver = false;
//     }
//   }

//   return parseInt(result.join(""), 2);
// }

// console.log(sum(1, 3)); // 4
// console.log(sum(5, 4)); // 9

const betterSolutionUgh = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  const kindaSum = num1 ^ num2;
  const carryOver = (num1 & num2) << 1;
  return betterSolutionUgh(kindaSum, carryOver);
}
console.log(betterSolutionUgh(1, 3)); // 4
console.log(betterSolutionUgh(5, 4)); // 9