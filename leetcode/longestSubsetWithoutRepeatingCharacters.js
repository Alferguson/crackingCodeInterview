/**
 * @param {string} s
 * @return {number}
 */
const ex1 = "abcabcbb";
const ex2 = "bbbbb";
const ex3 = "pwwkew";
const ex4 = " ";
const ex5 = "";
const ex6 = "au";
const ex7 = "dvdf";
const ex8 = "deguipdpo";
const ex9 = "cdd";
const ex10 = "ckilbkd";
const ex11 = "bpfbhmipx";
const ex12 = "ciridmtxsgaryv";
const ex13 = "abba";

// map version, 84ms
// const lengthOfLongestSubstring = s => {
//   const stringArr = s.split("");
//   const saLength = stringArr.length;
//   let answer = 0;
//   let j = 0;
//   let saMap = new Map();
//   for (let i = 0; i < saLength; i++) {
//     const currentLetter = stringArr[i];
//     if (saMap.has(currentLetter)) {
//       j = Math.max(saMap.get(currentLetter), j);
//     }
//     answer = Math.max(answer, i - j + 1);
//     saMap.set(currentLetter, i + 1);
//   }
//   return answer;
// };

// js object version, 104ms 
const lengthOfLongestSubstring = s => {
  const stringArr = s.split("");
  const saLength = stringArr.length;
  let answer = 0;
  let j = 0;
  let saMap = {}
  for (let i = 0; i < saLength; i++) {
    const currentLetter = stringArr[i];
    if (saMap[currentLetter]) {
      j = Math.max(saMap[currentLetter], j);
    }
    answer = Math.max(answer, i - j + 1);
    saMap[currentLetter] = i + 1;
  }
  return answer;
};

console.log("ex1 is ", lengthOfLongestSubstring(ex1)); // ans 3
console.log("ex2 is ", lengthOfLongestSubstring(ex2)); // ans 1
console.log("ex3 is ", lengthOfLongestSubstring(ex3)); // ans 3
console.log("ex4 is ", lengthOfLongestSubstring(ex4)); // ans 1
console.log("ex5 is ", lengthOfLongestSubstring(ex5)); // ans 0 
console.log("ex6 is ", lengthOfLongestSubstring(ex6)); // ans 2
console.log("ex7 is ", lengthOfLongestSubstring(ex7)); // ans 3
console.log("ex8 is ", lengthOfLongestSubstring(ex8)); // ans 6?
console.log("ex9 is ", lengthOfLongestSubstring(ex9)); // ans 2
console.log("ex10 is ", lengthOfLongestSubstring(ex10)); // ans 5
console.log("ex11 is ", lengthOfLongestSubstring(ex11)); // ans 7
console.log("ex12 is ", lengthOfLongestSubstring(ex12)); // ans 11
console.log("ex13 is ", lengthOfLongestSubstring(ex13)); // ans 2

// first answer
// const lengthOfLongestSubstring = s => {
//   let possibleAnswer = 0;
//   let answer = 0;
//   let letterObj = {};
//   const stringArr = s.split("");
//   if (stringArr.length) {
//     answer = 1;
//   }
//   for (const i in stringArr) {
//     const currentLetter = stringArr[i];
//     const nextLetter = stringArr[parseInt(i) + 1];
//     if (!nextLetter) {
//       if (!letterObj[currentLetter]) letterObj[currentLetter] = i;
//       possibleAnswer = Object.keys(letterObj).length;
//       if (possibleAnswer > answer) answer = possibleAnswer;
//     }
//     else if (letterObj[currentLetter]) {
//       if (possibleAnswer > answer) answer = possibleAnswer;
//       possibleAnswer = possibleAnswer - letterObj[currentLetter];
//       for (let j in letterObj) {
//         if (parseInt(letterObj[j]) < parseInt(letterObj[currentLetter])) {
//           delete letterObj[j];
//         }
//       }
//       letterObj[currentLetter] = i;
//       possibleAnswer = Object.keys(letterObj).length;
//     }
//     else {
//       letterObj[currentLetter] = i;
//       possibleAnswer = Object.keys(letterObj).length;
//     }
//   }
//   return answer;
// };