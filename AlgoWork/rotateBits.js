//  Rotate Bits
// ● Question : Given a number, write a function to rotate the bits (ie circular shift).
// ● Eg.
// rotate(0xFFFF0000, 8) = 0x00FFFF00
// rotate(0x13579BDF, 12) = 0xBDF13579
// rotate(0b10110011100011110000111110000000, 17) =
// 0b00011111000000010110011100011110


const rotateBits = (hex, number) => {
  number = number % 32;
  return (hex >> number | hex << (32 - number));
}

console.log(rotateBits(0xFFFF0000, 8)) // 0x00FFFF00
console.log(rotateBits(0x13579BDF, 12)) // 0xBDF13579
console.log(rotateBits(0b10110011100011110000111110000000, 17)) // 0b00011111000000010110011100011110