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
    return returnNode.value;
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
// console.log(linkedList.findNode(2))
// console.log(linkedList.findNode,(6))

const palindromeChecker = (linkedList, counter = 0) => {
  let palindrome = true;
  const length = linkedList.length;
  const leftVal = linkedList.findNode(counter);
  const rightVal = linkedList.findNode(length - counter - 1);
  console.log(leftVal, rightVal, counter)
  
  if (Number.isInteger(leftVal) && Number.isInteger(rightVal)) {
    if (leftVal === rightVal) {
      return palindromeChecker(linkedList, ++counter);
    }
    palindrome = false;
  }
  return palindrome ? "palindrome" : "Nopers";
}

console.log(palindromeChecker(linkedList));