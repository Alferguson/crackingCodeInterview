// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let l1 = "";
const first = new ListNode(2);
const second = new ListNode(4);
const third = new ListNode(3);
first.next = second;
second.next = third;
l1 = first;

let l2 = "";
const ffirst = new ListNode(5);
const ssecond = new ListNode(6);
const tthird = new ListNode(4);
ffirst.next = ssecond;
ssecond.next = tthird;
l2 = ffirst;
var addTwoNumbers = function(l1, l2) {
  let isLinkedListDone = false;
  let answer = [];

  while (!isLinkedListDone) {
    console.log(l1, l2)
    const firstVal = l1.val;
    const secondVal = l2.val;
    let product = firstVal + secondVal;
    product = product.toString();
    if (product.length > 1) {
      if (!l1.next) {
        l1.next = new ListNode(parseInt(product[0]))
        l2.next = new ListNode(0);
      } else {
        l1.next.val = l1.next.val + parseInt(product[0]);
      }
    }
    product = product[product.length - 1];
    product = parseInt(product);
    answer.push(new ListNode(product));

    firstTime = false;
    if (!l1.next && !l2.next) isLinkedListDone = true;
    l1 = l1.next;
    l2 = l2.next;
  }
  answer.forEach( (ll, i) => {
    if (!answer[i + 1]) return;
    ll.next = answer[i + 1];
  })
  return answer[0];
};
// const firstArr = [2, 4, 3];
// const secondArr = [5, 6, 4];

// var addTwoNumbers = function(firstArr, secondArr) {
//   const firstNumRev = firstArr.reverse().join("");
//   const secondNumRev = secondArr.reverse().join("");
//   const product = parseInt(firstNumRev) + parseInt(secondNumRev);
//   const productString = product.toString();
//   const answer = productString.split("");
//   return answer;
// };

console.log(addTwoNumbers(l1, l2));