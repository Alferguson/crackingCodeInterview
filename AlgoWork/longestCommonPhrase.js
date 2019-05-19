// Longest Common Substring
// ● Question : Given two strings, write a function that returns the longest common
// substring.
// ● Eg.
// longestSubstring("ABAB", "BABA") = "ABA"

// ignoring cases for now
const lcss = (str1, str2) => {
  let length = 0;
  let row = 0;
  let col = 0;;
  // way to create a 2d array in js where str1 length is col length and str2 length is row length
  const dpCache = [
    ...Array(str1.length)
  ].map( () => Array(str2.length));

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (i === 0 || j === 0) {
        dpCache[i][j] = 0;
      }
      else if (str1[i - 1] === str2[j - 1]) {
        dpCache[i][j] = dpCache[i - 1][j - 1] + 1;
        if (length < dpCache[i][j]) {
          length = dpCache[i][j];
          row = i;
          col = j;
        }
      }
      else {
        dpCache[i][j] = 0;
      }
    }    
  }

  if (length === 0) {
    return false;
  }


}

console.log(lcss("ABAB", "BABA")); // "ABA"

// dpCache would look like
// before
// [
//   [0, A, B, A, B],
//   [B, 0, 0, 0, 0],
//   [A, 0, 0, 0, 0],
//   [B, 0, 0, 0, 0],
//   [A, 0, 0, 0, 0]
// ]
// after
// [
//   [0, A, B, A, B],
//   [B, 0, 1, 0, 1],
//   [A, 1, 0, 2, 0],
//   [B, 0, 2, 0, 3],
//   [A, 1, 0, 3, 0]
// ]

console.log(lcss("ABC", "GHJ")); // false
console.log(lcss("ABC", "A")); // "A"
console.log(lcss("ABC", "ABD")); // "AB"
console.log(lcss("ABCCEFGH", "ABDEFGH")); // "EFGH"
