// String Compression
// ● Question : Given a string, write a function to compress it by shortening every
// sequence of the same character to that character followed by the number of
// repetitions. If the compressed string is longer than the original, you should return
// the original string.
// ● Eg.
// compress(“a”) = "a"
// compress(“aaa”) = "a3"
// compress(“aaabbb”) = "a3b3"
// compress(“aaabccc”) = "a3b1c3"

const strCompress = (str) => {
  let compressStr = "";
  let curr = str[0];
  let length = 1;

  for (let i = 1; i < str.length; i++) {
    const letter = str[i];
    if (letter !== curr) {
      compressStr += `${curr}${length}`;
      length = 1;
      curr = letter;
    }
    else {
      length++;
    }
  }
  compressStr += `${curr}${length}`;
  
  return compressStr.length > str.length ? str : compressStr ? compressStr : str;
}

console.log(strCompress("a")); // "a"
console.log(strCompress("aaa")); // "a3"
console.log(strCompress("aaabbb")); // "a3b3"
console.log(strCompress("aaabccc")); // "a3b1c3"