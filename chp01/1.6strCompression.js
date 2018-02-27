// String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z). 

function stringComp(str) {
    let letterArr = [];
    let lastLetter;
    for (let i = 0; i < str.length; i++) {
        let counter = 0;
        for (let j = i; j < str.length + 1; j++) {
            if (str[i] === lastLetter) {
                break;
            }
            else if (str[i] === str[j]) {
                counter++;
            }
            else {
                letterArr.push(`${str[i]}`);
                letterArr.push(`${counter}`);
                lastLetter = str[i];
                break;
            }
        }
    }
    return (letterArr.join("").length > str.length ? str : letterArr.join(""));
}

console.log(stringComp("aabcccccaaa"));
console.log(stringComp("abcdefgh"));
console.log(stringComp("ttttrrrrrrttttttttttttttttttttiiiiiiijjjiiiik"));
