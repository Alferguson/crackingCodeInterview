let hash = require('string-hash');

class Node {
  constructor(val) {
    this.key = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(val, currNode = this.head) {
    if (!currNode.key) {
      if (currNode === this.head) {
        return this.head = new Node(val);
      }
      return currNode = new Node(val);
    }
    add(val, currNode.next);
  }
  find(val, currNode = this.head) {
    if (!currNode.key) {
      return false;
    }
    if (val === currNode.key) {

    }
  }
}

class HashTable {
  constructor(length = 100000) {
    this.list = [];
    this.length = setList(length);
  }
  setList(length) {
    for (let i = 0; i < length; i++) {
      this.list.push(new LinkedList());
    }
  }
  getLinkedListIndex(key) {
    return hash(key) % this.length;
  }
  getLinkedList(key) {
    return this.list[this.getLinkedListIndex(key)];
  }

  set(key, val) {
    this.getLinkedList(key).add(key, val);
  }
  get(lookupKey) {
    return this.getLinkedList(lookupKey).find(lookupKey);
  }
}