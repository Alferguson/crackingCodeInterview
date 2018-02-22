// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)
// Hints: #106, #121, #134, #136 

function palindromePerm(str) {
    let newStr = str.split(" ").join("");
    let oddLetterCompare;
    let oddLetterCounter = 0;
    // check if string is even length not including spaces
    for (let i = 0; i < newStr.length; i++) {
        let counter = 0;
        for (let j = 0; j < newStr.length; j++) {
            if (newStr[i] === newStr[j]) {
                counter++;
            };
        }
        // if a letter appears once or more in an odd amount (1,3,5, etc)
        if (counter % 2 !== 0) {
            oddLetterCounter++;
            if (oddLetterCounter > 1 && oddLetterCompare !== newStr[i]) {
                return false;
            }
            oddLetterCompare = newStr[i];
        }
    }
    return true;
}

console.log(palindromePerm("Heyo"));
console.log(palindromePerm("wywy"));
console.log(palindromePerm("ninix"));
console.log(palindromePerm("ninixxx"));
console.log(palindromePerm("raceacr"));
console.log(palindromePerm("x"));
console.log(palindromePerm("bug bug"));
console.log(palindromePerm("bug not"));