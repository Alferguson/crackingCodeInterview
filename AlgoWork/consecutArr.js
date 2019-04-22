// 5. Consecutive Array
// ● Question : Given an unsorted array, find the length of the longest sequence of
// consecutive numbers in the array.
// ● eg.
// consecutive([4, 2, 1, 6, 5]) = 3, [4, 5, 6]
// consecutive([5, 5, 3, 1]) = 1, [1], [3], or [5]

const consecArr = arr => {
  const lookup = {};
  arr.forEach( num => lookup[num] = true);

  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    if (lookup[currVal - 1]) continue;
    let length = 0;
    
    while (lookup[currVal++]) length++;
    maxLength = Math.max(maxLength, length);
  }
  return maxLength;
}

const test1 = [4, 2, 1, 6, 5];
const test2 = [5, 5, 3, 1];

console.log(consecArr(test1)); // 3
console.log(consecArr(test2)); // 1