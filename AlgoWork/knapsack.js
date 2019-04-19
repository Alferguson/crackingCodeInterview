
// var items = [{w:3,b:10},{w:1,b:3},{w:2,b:9},{w:2,b:5},{w:1,b:6}];
// var capacity = 6;
// console.log(knapsack(items, capacity));
// will return 
// { maxValue: 25,
//   subset: [ { w: 1, v: 6 }, { w: 2, v: 9 }, { w: 3, v: 10 } ] }


function knapsack(items, maxCapacity) {
  const NO_SOLUTION = {maxValue:0, subset:[]};
  const memo = [];

  for (let i = 0; i < items.length; i++) {
    const row = [];
    // Variable 'cap' is the maxCapacity for sub-problems.
    for (let cap = 1; cap <= maxCapacity; cap++) {
      row.push(getSolution(i, cap));
    }
    memo.push(row);
  }
  return getLast();

  function getLast() {
    const lastRow = memo[memo.length - 1];
    return lastRow[lastRow.length - 1];
  }

  function getSolution(itemIterator, cap) {
    const currentItem = items[itemIterator];
    // The remaining capacity for the sub-problem to solve.
    const remainingCap = cap - currentItem.w;
    
    // the column number starts from zero.
    const col = cap - 1;
    // Refer to the last solution for this capacity,
    // which is in the cell of the previous itemIterator with the same column
    const lastSolution = itemIterator > 0 ? memo[itemIterator - 1][col] || NO_SOLUTION : NO_SOLUTION;
    // Refer to the last solution for the remainingCap capacity,
    // which is in the cell of the previous itemIterator with the corresponding column
    const lastSubSolution = itemIterator > 0 ? memo[itemIterator - 1][remainingCap - 1] || NO_SOLUTION : NO_SOLUTION;

    // If any one of the items weights greater than the 'cap', return the last solution
    if (remainingCap < 0) {
      return lastSolution;
    }

    // Compare the current best solution for the sub-problem with a specific capacity
    // to a new solution trial with the currentItem(new item) added
    const lastValue = lastSolution.maxValue;
    const lastSubValue = lastSubSolution.maxValue;

    const newValue = lastSubValue + lastItem.v;
    if (newValue >= lastValue) {
      // copy the subset of the last sub-problem solution
      const _lastSubSet = lastSubSolution.subset.slice();
      _lastSubSet.push(lastItem);
      return {
        maxValue: newValue, 
        subset:_lastSubSet
      };
    }
    else {
      return lastSolution;
    }
  }
}

// test
const items = [
  {w:70,v:135},
  {w:73,v:139},
  {w:77,v:149},
  {w:80,v:150},
  {w:82,v:156},
  {w:87,v:163},
  {w:90,v:173},
  {w:94,v:184},
  {w:98,v:192},
  {w:106,v:201},
  {w:110,v:210},
  {w:113,v:214},
  {w:115,v:221},
  {w:118,v:229},
  {w:120,v:240},
];
const otherItems = [
  {w:70,v:135},
  {w:73,v:139},
  {w:77,v:149},
  {w:82,v:156},

];
const capacity = 750;
const otherCapacity = 125;
// console.log(knapsack(items, capacity));
console.log(knapsack(otherItems, otherCapacity));
