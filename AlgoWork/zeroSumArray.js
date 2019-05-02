// 11. Zero Sum Subarray
// ● Question : Given an array, write a function to find any subarray that sums to zero,
// if one exists.
// ● Eg.
// zeroSum({1, 2, ‑5, 1, 2, ‑1}) = [2, ‑5, 1, 2]

const zeroSum = arr => {
  const sumArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) return [0];
    const lastSum = arr[i] + sumArr[i - 1];
    if (lastSum === 0) {
      return sumArr.map( (val, i) => arr[i] );
    }
    else {
      let tempLastSum = lastSum
      for (let j = 0; j < sumArr.length - 1; j++) {
        tempLastSum = tempLastSum - arr[j];
        if (tempLastSum === 0) return sumArr.map( (val, k) => {
          if (j + 1 <= k) {
            arr[k];
          }
        })        
      }
    }
    sumArr.push(lastSum);
  }
  return false;
}

const test1 = [1,3,5,0,0,0];
const test2 = [2,4,6];
const test3 = [2,-2, 6];
const test4 = [1, 2, -5, 1, 2, -1];
const test5 = [-1, -1, 2, 4, 6];

console.log(zeroSum(test1)); // [0]
console.log(zeroSum(test2)); // false
console.log(zeroSum(test3)); // [2, -2]
console.log(zeroSum(test4)); // [2, ‑5, 1, 2]
console.log(zeroSum(test5)); // [-1, -1, 2]