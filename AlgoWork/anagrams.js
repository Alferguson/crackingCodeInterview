// 14. Anagrams
// ● Question : Given two strings, write a function to determine whether they are
// anagrams.
// ● Eg.
// isAnagram("", "") = true
// isAnagram("A", "A") = true
// isAnagram("A", "B") = false
// isAnagram("ab", "ba") = true
// isAnagram("AB", "ab") = true

const anagramChecker = (str1, str2) => {
  const lStr1 = str1.toLowerCase().split("");
  const lStr2 = str2.toLowerCase().split("");
  let answer = true
  if (lStr1.length !== lStr2.length) return answer = false;

  const letterObj = {};

  lStr1.forEach( letter => {
    if (!letterObj.hasOwnProperty(letter)) {
      letterObj[letter] = 1;
    }
    else {
      letterObj[letter] = letterObj[letter] + 1;
    }
  });
  lStr2.forEach( letter => {
    if (!letterObj.hasOwnProperty(letter)) {
      return answer = false;
    }
    else {
      if (letterObj[letter] === 0) return answer = false;
      letterObj[letter] = letterObj[letter] - 1;
    }
  });
  Object.values(letterObj).forEach( num => {
    if (num !== 0) return answer = false;
  });
  return answer;
}

console.log(anagramChecker("", ""));
console.log(anagramChecker("A", "A"));
console.log(anagramChecker("A", "B"));
console.log(anagramChecker("ab", "ba"));
console.log(anagramChecker("AB", "ab"));
console.log(anagramChecker("abacore", "corebaa"));
console.log(anagramChecker("cue", "ciu"));