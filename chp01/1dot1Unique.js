function uniqueStr(str) {
    arrStr = str.split("");
    console.log(arrStr);
    arrStr.forEach(letter => {
        let counter = 0;
        arrStr.forEach(diffLetter => {
            if (arrStr[diffLetter] === arrStr[letter]) {
                console.log(`Diff is ${arrStr[diffLetter]} and other is ${arrStr[letter]}`)
                counter++;
                if (counter >= 2) {
                    return false;
                }
            }
        });
    });
    return true;
};

// console.log(uniqueStr("xyz"));
console.log(uniqueStr("yyy"));
