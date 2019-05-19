//  String Deletion
// ● Question : Given a string and a dictionary HashSet, write a function to determine
// the minimum number of characters to delete to make a word.
// ● Eg.
// dictionary: ["a", "aa", "aaa"]
// query: "abc"
// output: 2

const strDeletion = (str, dict) => {
  // abritary long number, not good practice
  let min = 10000;
  for (let i = 0; i < dict.length; i++) {
    const word = dict[i];
    if (word.length > str.length) continue;
    else if (word.length === str.length) {
      if (word === str) return 0;
    }
    else {
      let k = 0;
      for (let j = 0; j < word.length; j++) {
        const letter = word[j];
        const strLetter = str[k];
        if (letter === strLetter) {
          
          k++;
        }
        else if (j === 0) break;
      }
      min = min > str.length - k ? str.length - k : min;
    }
  }
  return min;
}

const testDict = ["a", "aa", "aaa"];
const testQuery = "abc";

console.log(strDeletion(testQuery, testDict));