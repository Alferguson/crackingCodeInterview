// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false 

function oneAway(str1, str2) {
    if (str1.length === str2.length) {
        let counter = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                counter++;
                if (counter > 1) {
                    return false;
                }
            }
        }
        return true;
    }
    else if (str1.length === str2.length + 1 || str1.length + 1 === str2.length) {
        let counter = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                
            }
        }
        return true;
    }
    else if (str1.length === str2.length - 1 || str1.length - 1 === str2.length) {

    }
    else {
        return false;
    }
};
let pale = "pale"
console.log(pale[3]);
console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "TURBO"));