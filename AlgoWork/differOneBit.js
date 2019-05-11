// Gray Code
// ● Question : Given two integers, write a function to determine whether or not their
// binary representations differ by a single bit.
// ● Eg.
// gray(0, 1) = true
// gray(1, 2) = false

const gray = (num1, num2) => {
  const diffXor = num1 ^ num2;
  return diffXor && (diffXor & (diffXor - 1)) === 0;
}

console.log(gray(0, 1)) // true
console.log(gray(1, 2)) // false