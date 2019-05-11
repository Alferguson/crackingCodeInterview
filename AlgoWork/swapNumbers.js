// Swap Variables
// ● Question : Given two integers, write a function that swaps them without using
// any temporary variables.

const swap = (num1, num2) => {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
  return [num1, num2];
}

const otherswap = (num1, num2) => {
//  2  = 1       3     
  num1 = num1 ^ num2;
//   1 =  2      3
  num2 = num1 ^ num2;
//   3  =  2     1
  num1 = num1 ^ num2;
  return [num1, num2];
}

console.log(swap(1, 3));
console.log(otherswap(1, 3));