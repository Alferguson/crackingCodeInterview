// Random Linked List
// ● Question : Given a linked list where each node has two pointers, one to the next
// node and one to a random node in the list, clone the linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.otherNext = null;
  }
}

const randLL = (ll) => {
  let node = ll;
  while (node) {
    console.log(node.otherNext.value);
    node = node.next;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);

one.next = two;
two.next = three;
three.next = four;

one.otherNext = three;
two.otherNext = one;
three.otherNext = three;
four.otherNext = two;

console.log(randLL(one)); // 3 1 3 2