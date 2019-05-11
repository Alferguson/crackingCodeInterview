// Number of Ones in a Binary Number
// ● Question : Given an integer, write a function to compute the number of ones in
// the binary representation of the number.

const numOfOnesBinary = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num & 1;
    num >>= 1;
  }
  return sum;
}

console.log(numOfOnesBinary(0)); // 0
console.log(numOfOnesBinary(2)); // 1
console.log(numOfOnesBinary(3)); // 2
console.log(numOfOnesBinary(7)); // 3
