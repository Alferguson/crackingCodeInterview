function uniqueStr(str) {
    let unique = true;
    arrStr = str.split("");
    arrStr.forEach(letter => {
        let counter = 0;
        arrStr.forEach(diffLetter => {
            if (diffLetter === letter) {
                counter++;
                if (counter >= 2) {
                    unique = false;
                }
            }
        });
    });
    return unique;
};

// console.log(uniqueStr("xyz"));
console.log(uniqueStr("yyy"));
console.log(uniqueStr("xyz"));
