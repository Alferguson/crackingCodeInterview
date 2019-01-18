// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Note:

// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like . or *.
// Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input:
// s = "aa"
// p = "a*"
// Output: true
// Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input:
// s = "ab"
// p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
// Example 4:

// Input:
// s = "aab"
// p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
// Example 5:

// Input:
// s = "mississippi"
// p = "mis*is*p*."
// Output: false

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  const strArr = s.split("");
  const expArr = p.split("");
  let j = 0;
  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i];
    let match = expArr[j];
    let matchAnyChar = false; // .
    let matchThisChar = false; // *
    let matchAllChars = false;
    if (expArr[j] === ".") matchAnyChar = true;
    if (expArr[j + 1] === "*") matchThisChar = true;
    matchAllChars = matchAnyChar && matchThisChar ? true : false;
    j++;
    if (!matchThisChar && expArr[j] && !strArr[i + 1]) {
      return false;
    }
    else if (matchAllChars) {
      if (!expArr[j + 1]) {
        return true;
      }
      const findMatchIndex = findFirstMatch(s, strArr.length - 1, i, expArr[j + 1]);
      if (!findMatchIndex) {
        return false;
      }
      i = i + findMatchIndex;
      j++;
      continue;
    }
    else if (matchAnyChar) {
      continue;
    }
    else if (matchThisChar) {
      i = i + recursiveMatchCheck(s, i, match);
      j++;
      continue;
    }
    else if (char === match) {
      continue;
    }
    else if (char !== match) {
      return false;
    }
    else {
      return true;
    }
  }
  return true;
};

function recursiveMatchCheck(str, begin, match, numOfMatches = 0) {
  if (str[begin] === match) {
    recursiveMatchCheck(str, ++begin, match, ++numOfMatches);
  }
  return numOfMatches;
}
function findFirstMatch(str, begin, startingIndex, match) {
  if (str[begin] === match) {
    return true;
  }
  else if (startingIndex === begin) {
    begin = 0;
  }
  else {
    findFirstMatch(str, --begin, match);
  }
  return begin;
}

console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "a*")); // true
console.log(isMatch("ab", ".*")); // true
console.log(isMatch("aab", "c*a*b")); // true
console.log(isMatch("mississippi", "mis*is*p*.")); // false
console.log(isMatch("ab", ".*c")); // false
console.log(isMatch("aaa", "aaaa")); // false
console.log(isMatch("aaa", "ab*a")); // false
