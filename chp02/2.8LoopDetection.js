// Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
// beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
// as to make a loop in the linked list.
// EXAMPLE
// Input: A -> B -> C -> D -> E -> C [the same C as earlier]
// Output: C

// Note I am trying to solve this without an array
// Note, I've seen many answers use floyds method but not Brents algo or Gospers algo. I will try one of those. 
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // will now be corrupted
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
      returnNode = returnNode.next ? returnNode.next : returnNode;
    }
    return returnNode ? returnNode : null;
  }
  corruptToCircular(position) {
    let newLastNode = this.findNode(position);
    let oldLastNode = this.findNode(this.length - 1);
    oldLastNode.next = newLastNode;
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

linkedList.corruptToCircular(3);

const gosper = linkedList => {
  
}