// Remove  Dups! Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

const LinkedList = function(value) {
    this.value = value;
    this.next = null;
}


function perfect_bits(a, b) {
    let answer = 0;
    let aBinLength = a.toString(2).length;
    let bBinLength = b.toString(2).length;
    let twoPower = [];
    // to calculate what limit 2^n has for the length of b
    for (let q = 0; q <= bBinLength; q++) {
        twoPower.push(Math.pow(2, q));
    }
    for (let r = aBinLength; r <= bBinLength - 1; r++) {
        let nBinomial = r; 
        for (let s = 0; s < twoPower.length; s++) {
            answer +=binomialCo(r, twoPower[0]);
        }
    }
    return answer;
}
function perfect_bits(a, b) {
    let counter = 0;
    let aBinLength = a.toString(2).length;
    let bBinLength = b.toString(2).length;
    for (let j = aBinLength + 1; j < bBinLength + 1; j++) {
        if (p(j) === true) {
            counter++;
        }
        
    }
    return counter;
}
