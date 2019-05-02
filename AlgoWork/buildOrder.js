// Graph Problems
// 15. Build Order
// ● Question : Given a list of packages that need to be built and the dependencies for
// each package, determine a valid order in which to build the packages.
// ● Eg.
// 0:
// 1: 0
// 2: 0
// 3: 1, 2
// 4: 3
// output: 0, 1, 2, 3, 4

const build = listOfPackages => {
  let buildArray = [];
  let noDependency = false;
  const sideArray = [];
  listOfPackages.forEach( (dependency, package) => {
    if (dependency.length === 0) {
      buildArray.unshift(package);
    }
    else if (package === 0 && dependency.length !== 0) {
      noDependency = true;
      sideArray.push(package);
    }
    else if (dependency[0] >= buildArray[buildArray.length - 1]) {
      buildArray.push(package);
    }
    else {
      buildArray = _insert(buildArray, dependency[0], package);
    }
    console.log(buildArray);
  });
  return buildArray;

  function _insert(arr, value, pointer) {
    let shiftForward = false;
    let prevValue = "";
    let currValue = "";
    for (let i = 0; i < arr.length; i++) {
      prevValue = currValue;
      if (value < arr[i] && !shiftForward) {
        shiftForward = true;
        currValue = arr[i];
        arr[i] = pointer;
      }
      else if (shiftForward) {
        currValue = arr[i];
        arr[i] = prevValue;
      }
    }
    arr.push(currValue);
    return arr;
  }
}

const test1 = [
  [],
  [0],
  [0],
  [1, 2],
  [3],
];
const test2 = [
  [3],
  [4],
  [4, 1],
  [1, 2],
  [],
];

// console.log(build(test1)); // [0, 1, 2, 3, 4] or [0, 2, 1, 3, 4]
console.log(build(test2)); // [4, 1, 2, 3, 0]