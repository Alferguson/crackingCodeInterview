class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.start = null;
    this.tail = null;
    this.reverseNumber = null;
  }
  add(value, node = this.start) {
    this.tail = value;
    // for start
    if (!this.start) return this.start = new Node(value);
    if (!node.next) return node.next = new Node(value);
    this.add(value, node.next);
  }
  computeNumber(node = this.start.next, number = this.start.value) {
    number = `${number}${node.value}`;
    if (node.next) {
      this.computeNumber(node.next, number);
    }
    else {
      this.reverseNumber = this.constructor._reverseString(number);
    }
    return this.reverseNumber;
  }
  static _reverseString(str) {
    str = str.toString();
    let split = str.split("");
    let reverse = split.reverse();
    return reverse.join("");
  }
}

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(4);
linkedList.add(1);
linkedList.add(6);
linkedList.add(9);
linkedList.add(9);
linkedList.add(8);

const otherLinkedList = new LinkedList();
otherLinkedList.add(1);
otherLinkedList.add(5);
otherLinkedList.add(9);
otherLinkedList.add(2);
otherLinkedList.add(1);
otherLinkedList.add(4);
otherLinkedList.add(7);

const addedList = parseInt(linkedList.computeNumber()) + parseInt(otherLinkedList.computeNumber());
// console.log(linkedList.reverseNumber)
// console.log(linkedList.computeNumber())
const sum = LinkedList._reverseString(addedList)
console.log(sum.split(""));

sumList = new LinkedList();

sum.split("").forEach(val => {
  sumList.add(val);  
});
console.log(sumList);


