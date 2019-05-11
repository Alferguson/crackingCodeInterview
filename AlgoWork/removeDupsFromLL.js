// Dedup Linked List
// ● Question : Given an unsorted linked list, write a function to remove all the
// duplicates.
// ● eg.
// dedup(1 ‑> 2 ‑> 3 ‑> 2 ‑> 1) = 1 ‑> 2 ‑> 3

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const dedup = (ll) => {
  const origin = ll;
  let currNode = ll;
  let nonDup = null;
  const cache = {

  }
  while (currNode) {
    if (!cache[currNode.value]) {
      nonDup = currNode;
      cache[currNode.value] = true;
      currNode = currNode.next;
    }
    else {
      while (true) {
        currNode = currNode.next;
        if (!currNode) break;
        if (!cache[currNode.value]) break;
      }
      nonDup.next = currNode;
    }
  }
  return origin;
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const otherTwo = new Node(2);
const ohterOne = new Node(1);

one.next = two;
two.next = three;
three.next = otherTwo;
otherTwo.next = ohterOne;

console.log(dedup(one));