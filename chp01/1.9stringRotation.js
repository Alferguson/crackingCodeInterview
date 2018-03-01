// String Rotation:Assumeyou have a method isSubstringwhich checks if oneword is a substring
// of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat"). 

function isSubstring(s1, s2) {
    let changedWord = s1;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[0]) {
            let tempString = changedWord.substring(0, i);
            changedWord = changedWord.concat(tempString);
            changedWord = changedWord.slice(i);
            if (changedWord === s2) {
                return true;
            }
        }
    }
    return false;
};

console.log(isSubstring("water", "erwat"));
console.log(isSubstring("turbo", "dogs"));
console.log(isSubstring("water", "erzat"));