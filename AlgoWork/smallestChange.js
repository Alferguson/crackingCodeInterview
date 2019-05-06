// Smallest Change
// ● Question : Given an input amount of change x, write a function to determine the
// minimum number of coins required to make that amount of change.
// ● Eg. (using American coins)
// change(1) = 1
// change(3) = 3
// change(7) = 3
// change(32) = 4


const smallestChange = (x) => {
  if (x <= 0) return false;
  const coins = {
    1: true,
    5: true,
    10: true,
    25: true
  }
  function change(x, answer = 1) {
    if (coins[x]) return answer;
    if ((x - 25) > 0) return change(x - 25, answer + 1);
    if ((x - 10) > 0) return change(x - 10, answer + 1);
    if ((x - 5) > 0) return change(x - 5, answer + 1);
    if ((x - 1) > 0) return change(x - 1, answer + 1);
  };
  return change(x);
}

console.log(smallestChange(1)); // 1
console.log(smallestChange(3)); // 3
console.log(smallestChange(7)); // 3
console.log(smallestChange(32)); // 4