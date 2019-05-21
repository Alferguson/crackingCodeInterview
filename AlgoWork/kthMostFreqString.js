// Kth Most Frequent String
// ● Question : Given a list of strings, write a function to get the kth most frequently
// occurring string.
// ● Eg.
// kthMostFrequent({"a","b","c","a","b","a"}, 0) = "a"
// kthMostFrequent({"a","b","c","a","b","a"}, 1) = "b"
// kthMostFrequent({"a","b","c","a","b","a"}, 2) = "c"
// kthMostFrequent({"a","b","c","a","b","a"}, 3) = null

// assuming list isn't ordered, if we order the list, it could be easier but that would take ~O(n log n) with most sorting algos 
const kthMostFreqStr = (list, freq) => {
  const cache = {};
  for (let i = 0; i < list.length; i++) {
    const el = list[i];
    if (!cache[el]) cache[el] = 1;
    else {
      cache[el] = cache[el] + 1;
    }
  }
  const sortedArr = Object.entries(cache).sort( (a, b) => b[1] - a[1]);
  return sortedArr[freq] ?  sortedArr[freq][0] : null;
}

console.log(kthMostFreqStr(["a", "b", "c", "a", "b", "a"], 0)) // "a"
console.log(kthMostFreqStr(["a", "b", "c", "a", "b", "a"], 1)) // "b"
console.log(kthMostFreqStr(["a", "b", "c", "a", "b", "a"], 2)) // "c"
console.log(kthMostFreqStr(["a", "b", "c", "a", "b", "a"], 3)) // null