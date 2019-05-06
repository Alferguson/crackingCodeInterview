// Sort Stacks
// ● Question : Given a stack, sort the elements in the stack using one additional
// stack.
// ● Eg.
// sort([1, 3, 2, 4]) = [1, 2, 3, 4]


const sortStack = (s) => {
  const ans = [];
  while (s.length !== 0) {
    const lastVal = s.pop();
    if (ans.length === 0 || lastVal >= ans[ans.length - 1]) {
      ans.push(lastVal);
    }
    else if (lastVal < ans[ans.length - 1]) {
      while (ans.length !== 0) {
        const ansLastVal = ans.pop();
        s.push(ansLastVal);
        if (lastVal >= ans[ans.length - 1]) break;
      }
      ans.push(lastVal);
    }
  }
  return ans;
}

console.log(sortStack([7, 6, 5, 4])); // [4, 5, 6, 7]
console.log(sortStack([1, 3, 2, 4])); // [1, 2, 3, 4]