// Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting
// node. Note that the intersection is defined based on reference, not value. That is, if the kth
// node of the first linked list is the exact same node (by reference) as the jth node of the second
// linked list, then they are intersecting. 

// Note I am trying to solve this without an array
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }
  add(value, node = this.head) {
    this.tail = value;
    // for head
    if (!this.head) {
      this.length = 1;
      return this.head = new Node(value);
    }
    if (!node.next) {
      this.length++;
      return node.next = new Node(value);
    }

    this.add(value, node.next);
  }
  findNode(position, currentNode = this.head) {
    let returnNode = currentNode;
    for (let i = 0; i < position; i++) {
      returnNode = returnNode.next ? returnNode.next : returnNode.value;
    }
    return returnNode ? returnNode.value : null;
  }
}

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(4);
linkedList.add(9);
linkedList.add(6);
linkedList.add(6);
linkedList.add(9);
linkedList.add(4);
linkedList.add(2);

const otherLinkedList = new LinkedList();

otherLinkedList.add(6);
otherLinkedList.add(7);
otherLinkedList.add(1);
otherLinkedList.add(1);
otherLinkedList.add(1);
otherLinkedList.add(1);
otherLinkedList.add(1);

const findIntersection = (linkedList, otherLinkedList, position = 0) => {
  const leftValue = linkedList.findNode(position);
  const rightValue = otherLinkedList.findNode(position);
  
  if (!leftValue || !rightValue) {
    return `No intersections found`;
  }
  else if (leftValue !== rightValue) {
    return findIntersection(linkedList, otherLinkedList, ++position);
  }
  return `At position ${position} there is an intersection between both linkedLists with a value of ${leftValue}`;
}
console.log(findIntersection(linkedList, otherLinkedList));