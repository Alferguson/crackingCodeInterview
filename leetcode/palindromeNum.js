// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:


/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  if (x < 10) return true;

  let revertX = 0;
  // while original num is greater than reversal, this is done to avoid going through more than half of the number
  while (x > revertX) {
    // if you add the last digit of the number to its reversal, you get new reversal,
    // the * 10 is to ensure the amt of digits fits (in 1289, take 9 and add 0 since its reversal starts with only 9, then next iteration, 9 * 10 will be 90 and plus whatever num < 10 will yield the next reversal (90 + 8))
    // for 1st iteration, reversal is 0 since it will be last digit anyway
    // now take away last digit from original by dividing it by 10 and flooring it
    // then for 2nd iteration, add the product of lastDig of original and 10 with the 2nd to last dig of original
    // now remove last dig again for original number
    // repeat until original is less than reversal indicating we are around middle
    // finally, check if current num is equal to reversal (1221 -> 12 === 12, 1289 -> 98 !== 12)
    // and check if current num is equal to floor of reversal / 10 to account for odd numbers
    // 12321 >- 12 === floor(12.3), 20791 >- 20 !== floor(19.7)
    revertX = revertX * 10 + getLastDig(x);
    x = Math.floor(x / 10);
  }
  return x === revertX || x === Math.floor(revertX / 10) ? true : false;
};

function getLastDig(num) {
  return num % 10;
}

// console.log(isPalindrome(121))
// console.log(isPalindrome(123))
console.log(isPalindrome(10))
module.exports = isPalindrome;