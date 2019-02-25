// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// 2 = abc, 3 = def, etc. 9 = wxyz

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  if (!digits) return false; 
  let answer = [];
  const numToLetter = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  }
  const digArr = digits.toString().split("");
  console.log(digArr);
  if (!digArr.length) return 0;
  iterateArrCombo(digArr, numToLetter, answer);
  return answer;
};

function iterateArrCombo(digArr, numToLetter, answer, comboString = "", numPos = 0) {
  const currentNum = digArr[numPos];
  for (let i = 0; i < numToLetter[currentNum].length; i++) {
    const currentLetter = numToLetter[currentNum][i];
    const newNumPos = numPos + 1;
    const newString = comboString + currentLetter;
    if (digArr[newNumPos]) {
      iterateArrCombo(digArr, numToLetter, answer, newString, newNumPos);
    }
    else {
      answer.push(newString);
    }
  }
}

console.log(letterCombinations("23"));
console.log(letterCombinations("231"));
console.log(letterCombinations(""));