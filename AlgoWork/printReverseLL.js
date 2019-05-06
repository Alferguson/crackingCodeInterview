// Print Reversed Linked List
// ● Question : Given a linked list, write a function that prints the nodes of the list in
// reverse order.
// ● Eg.
// printReversedList(1 ‑> 2 ‑> 3)
// 3
// 2
// 1

// ll is an array
// this will pretend this is a singly ll by only having access to the first el (head) and from there its next elements
const rll = (ll, i = 0) => {
  const currEl = ll[i];
  if (ll[i + 1]) {
    rll(ll, i + 1);
  }
  console.log(currEl);
}

console.log(rll([1, 2, 3])) // 3 2 1 Note, does not return a ll