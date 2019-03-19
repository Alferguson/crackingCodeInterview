// Given a linked list, remove the n-th node from the end of list and return its head.
// Example:
// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNthFromEnd = (head, n) => {
  if (!head || !head.next) return false;
  let fast = head;
  let slow = head;

  for (let i = 0; i <= n; i++) {
    if (!fast) return head.next;
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  if (n === 1) {
    slow.next = null;
  }
  else {
    slow.next = slow.next.next;
  }
  return head;
};

function iterate(head) {
  let currNode = head;
  for (let i = 0; i < 10; i++) {
    console.log(currNode.val);
    currNode = currNode.next;
    if (!currNode) break;
  }
}
let ll = new ListNode(1);
ll.next = new ListNode(2);
ll.next.next = new ListNode(3);
ll.next.next.next = new ListNode(4);
ll.next.next.next.next = new ListNode(5);
ll.next.next.next.next.next = new ListNode(6);
iterate(ll);
console.log("//////////")
removeNthFromEnd(ll, 1);
console.log("//////////")
iterate(ll);

// //////////////////////

// var loopThroughAndRemove = function(currNode, n) {
//   let result;
  
//   if (currNode.next === null) {    
//     return n - 1;
//   }
//   result = loopThroughAndRemove(currNode.next, n);

//   if (result === 0) {
//     if (currNode.next.next !== null) {
//       currNode.next = currNode.next.next;
//     } else {
//       currNode.next = null;
//     }
//   }
//   return result - 1;
  
// }


// var removeNthFromEnd = function(head, n) {
  
//   if (head.next === null) {
//     return null;
//   }
//   result = loopThroughAndRemove(head, n)
  
//   if (result === 0) {
//     head = head.next;
//   }
  
//   return head;
// };