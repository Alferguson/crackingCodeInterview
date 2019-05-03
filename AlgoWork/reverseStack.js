// 20. Reverse Stack
// ● Question : Given a stack, reverse the items without creating any additional data
// structures.
// ● Eg.
// reverse(1‑>2‑>3) = 3‑>2‑>1

// gonna limit myself so I don't use array's constant lookup via indexing except 
// since stacks are FILO, I will have constant access to the top (last) element for popping and looking up

const reverseStack = (stack) => {
  if (stack.length === 0) return;
  const top = stack.pop();
  
  reverseStack(stack);
  
  stack.push(top);
  return stack;
}

const test1 = [1, 2, 3];

console.log(reverseStack(test1)); // [3, 2, 1]