// Linked List Cycles
// ● Question : Given a linked list, determine whether it contains a cycle.

const llCycle = (ll) => {
  let rabit = ll.head;
  let turtle = ll.head;

  while (true) {
    rabit = ll.next.next;
    turtle = ll.next;
    if (!rabit || !rabit.next) return false;
    if (rabit === turtle) return true;
  }
}