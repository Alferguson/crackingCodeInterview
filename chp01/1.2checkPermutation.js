//  Given two strings, write a method to decide if one is a permutation of the
// other. 

function permutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    else {
        let newStr1 = str1.split("").sort().join("");
        let newStr2 = str2.split("").sort().join("");
        if (newStr1 === newStr2) {
            return true;
        }
        else {
            return false;
        }
    }
};
console.log(permutation("abc", "cba"));
console.log(permutation("aaaa", "bbbbb"));