// decode takes input of morse
// ex: "._ ._"
// returns letters corresponding to each morse code
// "aa"
// if a space exists in the input, it signifies that sub string is the end of that character
const decode = morse => {
  return morse
    .split(" ")
    .map( m => morseToCharBitObj[m] )
    .join("")
}

// encode takes a string of characters and/or numbers and/or spaces
// ex: "ab123 4c"
// returns corresponding morse code without spaces (it ignores spaces)
// ".____.__...._.._._"
const encode = str => {
  return str
    .split(" ")
    .map( s => charToMorseBitObj[s] )
    .join("")
}

const morseToCharBitObj = {
  "._": "a",
  "___": "b",
  "_._": "c"
  // etc
};

const charToMorseBitObj = {
  "a": "._",
  // etc
};

const morseToBit = {
  ".": 0,
  "_": 1
}