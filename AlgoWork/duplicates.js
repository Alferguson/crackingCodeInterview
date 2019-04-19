// 4. Find Duplicates
// ● Question : Given an array of integers where each value 1 <= x <= len(array), write
// a function that finds all the duplicates in the array.
// ● Eg.
// dups([1, 2, 3])    = []
// dups([1, 2, 2])    = [2]
// dups([3, 3, 3])    = [3]
// dups([2, 1, 2, 1]) = [1, 2]


const findDups = numbers => {
  const iteratorCache = {};
  // could use a set but will try to use array instead for extra challenge
  const dups = [];
  for (let i = 0; i < numbers.length; i++) {
    
    if (iteratorCache[i]) continue;

    const currEl = numbers[i];
    
    for (j = 0; j < numbers.length; j++) {
      if (j === i || iteratorCache[j]) {
        continue;
      }
      else if (numbers[j] === currEl) {
        if (iteratorCache[i] !== currEl) dups.push(currEl);
        iteratorCache[j] = currEl;
        iteratorCache[i] = currEl;
      }
    }
    iteratorCache[i] = currEl;
  }
  return dups;
}

const test1 = [1, 2, 3]; // []
const test2 = [1, 2, 2]; // [2]
const test3 = [3, 3, 3]; // [3]
const test4 = [2, 1, 2, 1]; // [1, 2]

console.log(findDups(test1));
console.log(findDups(test2));
console.log(findDups(test3));
console.log(findDups(test4));