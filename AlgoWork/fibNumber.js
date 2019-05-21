// Fibonacci Number
// ● Question : Given an integer n, write a function to compute the nth Fibonacci
// number.
// ● Eg.
// fibonacci(1) = 1
// fibonacci(5) = 5
// fibonacci(10) = 55

const fib = (n) => {
  const fibArr = [1, 1]
  if (n === 0 || n === 1) return fibArr[1];
  else {
    while (n !== 2) {
      const secLast = fibArr[fibArr.length - 2];
      const firstLast = fibArr[fibArr.length - 1];
      fibArr.push(secLast + firstLast);
      n--;
    }
    console.log(fibArr)
    return fibArr[fibArr.length - 1];
  }
}

console.log(fib(1)); // 1
console.log(fib(5)); // 5
console.log(fib(10)); // 55