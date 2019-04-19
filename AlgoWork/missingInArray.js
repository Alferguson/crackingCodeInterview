// find what is missing in array

const twoMissingArray = (arr) => {
  const totalLength = arr.length + 2;
  const totalSum = Math.ceil(totalLength * totalLength - 1 / 2);
  const arrSum = arr.reduce( (accum, curr) => accum + curr, 0);
  const 

}

const testArr = [1, 3, 4, 6];

console.log(twoMissingArray(testArr));