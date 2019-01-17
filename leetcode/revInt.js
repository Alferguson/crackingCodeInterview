const reverse = function(x) {
  let answer = [];
  let neg = false;
  const absX = Math.abs(x);
  
  if (x === 0 || x > ((2**31) - 1) || x < -(2**31)) {
   return 0;   
  }
  else if (x < 0) {
   neg = true;   
  }
  const numStrArr = absX.toString(10).split("");
  for (let i = (numStrArr.length - 1); i >= 0; i--) {

      answer.push(numStrArr[i]);
  }
  let newAns = answer.join("");
  let newNewAns = neg ? -parseInt(newAns) : parseInt(newAns);
  return newNewAns;  
};
console.log(reverse(325));