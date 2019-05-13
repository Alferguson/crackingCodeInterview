// Nth to the Last Element
// ● Question : Given a linked list, and an input n, write a function that returns the
// nth-to-last element of the linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const nToLast = (node, n) => {
  let curr = node;
  let follower = node;
  for (let i = 0; i < n; i++) {
    if (!curr) return false;
    curr = curr.next;
  }
  while (curr.next) {
    curr = curr.next;
    follower = follower.next;
  }
  return follower.value;
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
// 1 -> 2 -> 3 -> 4 -> 5
one.next = two;
two.next = three;
three.next = four;
four.next = five;

console.log(nToLast(one, 4)); // 1
console.log(nToLast(one, 3)); // 2
console.log(nToLast(one, 1)); // 4