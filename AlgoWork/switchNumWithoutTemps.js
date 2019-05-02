// switch 2 numbers without declaring tempory variables

const switchNums = (num1, num2) => {

  // error handling
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR: Invalid arguments";
  }

  // calculate the sum
  num1 = num1 + num2; 
  // solve for num2
  num2 = num1 - num2; 
  // solve for num1
  num1 = num1 - num2; 

  return [num1, num2]
}

// tests

console.log(switchNums(2, 5)) // -> [5, 2]
console.log(switchNums("43", 5)) // -> ERROR: Invalid arguments 
console.log(switchNums(2, "ab")) // -> ERROR: Invalid arguments 
console.log(switchNums(2)) // -> ERROR: Invalid arguments 
console.log(switchNums(1, -9)) // -> [-9, 1]
console.log(switchNums(-3, -4)) // -> [-4, -3]
console.log(switchNums(0, 0)) // -> [0, 0]