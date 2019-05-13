// Three Sum
// ● Question : Given a list of integers, write a function that returns all sets of 3
// numbers in the list, a, b, and c, so that a + b + c == 0.
// ● Eg.
// threeSum({‑1, 0, 1, 2, ‑1, ‑4})
// [‑1, ‑1, 2]
// [‑1, 0, 1]

const threeSum = (list) => {
  let answer = [];
  
  // brute force
  for (let i = 0; i < list.length; i++) {
    const first = list[i];
    for (let j = i + 1; j < list.length; j++) {
      const second = list[j];
      for (let k = j + 1; k < list.length; k++) {
        const third = list[k];
        if ((first + second + third) === 0) answer.push([first, second, third]);
      }
    }
  }

  return answer;
}
const arrayOfNums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(arrayOfNums));