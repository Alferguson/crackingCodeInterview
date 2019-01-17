// From leetcode, looked up majority of answer

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
// const longestPalindrome = s => {
//   let answer = "";
//   if (!s || !s.length) return;
//   for (let i = 0; i < s.length; i++) {
//     let firstPalin = expand(s, i, i);
//     let secPalin = expand(s, i, i + 1);
//     let potentialPalin = firstPalin.length > secPalin ? firstPalin : secPalin;
//     if (potentialPalin.length > answer.length) answer = potentialPalin;
//   }
//   return answer;
// };

// function expand(s, left, right) {
//   while(left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;
//     right++;
//   }
//   return s.slice(left, right);
// }

const longestPalindrome = s => {
  if (!s || s.length <= 1) return s;
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let temp = expand(s, i, i);
    let temp2 = expand(s, i, i + 1);
    tempLongest = temp.length > temp2.length ? temp : temp2;

    if (tempLongest.length > longest.length) {
      longest = tempLongest;
    }
  }
  return longest;
};

const expand = (s, begin, end) => {
  while(begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
    begin--;
    end++;
  }
  return s.slice(begin + 1, end); // +1 for begin is to account for -1 becoming 0 again
};

console.log(longestPalindrome("babad"));