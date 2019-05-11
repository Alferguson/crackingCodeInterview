// Split a Linked List
// ● Question : Given a linked list, write a function to split the list into two equal
// halves.
// ● Eg.
// divide(1 ‑> 2 ‑> 3 ‑> 4) = 1 ‑> 2, 3 ‑> 4
// divide(1 ‑> 2 ‑> 3 ‑> 4 ‑> 5) = 1 ‑> 2 ‑> 3, 4 ‑> 5

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const splitLL = node => {
  const ll = node;
  let turtle = node;
  let rabit = node;
  while (true) {
    // repeated to avoid null pointer issues with old length ll
    rabit = rabit.next;
    if (!rabit) break;
    rabit = rabit.next;
    if (!rabit) break;
    turtle = turtle.next;
  }
  let otherLL = turtle.next;
  turtle.next = null;
  return [ll, otherLL];
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

console.log(splitLL(one));