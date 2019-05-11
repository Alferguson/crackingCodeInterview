// Palindromes
// ● Question : Given a linked list, write a function to determine whether the list is a
// palindrome.
// ● Eg.
// palindrome(1 ‑> 2 ‑> 3) = false
// palindrome(1 ‑> 2 ‑> 1) = true

const llIsPal = ll => {
  const temp = ll;
  for (let i = 0; i < temp.length; i++) {
    if (i >= temp.length - 1) return true;
    const first = temp[i];
    const last = temp.pop();
    if (first !== last) return false;
  }
  return true;
}

console.log(llIsPal([4, 5, 6])); // false
console.log(llIsPal([7, 1, 1, 7])); // true
console.log(llIsPal([1, 2, 3, 4])); // false
console.log(llIsPal([1, 2, 1])); // true