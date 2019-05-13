// Autocomplete
// ● Question : Write an autocomplete class that returns all dictionary words with a
// given prefix.
// ● Eg.
// dict:   {"abc", "acd", "bcd", "def", "a", "aba"}
// prefix: "a" ‑> "abc", "acd", "a", "aba"
// prefix: "b" ‑> "bcd"
class Node {
  constructor(letter) {
    this.letter = letter;
    this.end = false;
    this.children = {};
  }
}
class Trie {
  constructor() {
    this.root = new Node(0);
  }
  addWord(word, currentNode = this.root) {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!currentNode.children[letter]) {
        const newLetter = new Node(letter);
        if (i === word.length - 1) newLetter.end = true;
        currentNode.children[letter] = newLetter;
      }
      else if (i === word.length - 1) {
        currentNode.children[letter].end = true;
      }
      currentNode = currentNode.children[letter];
    }
  }
}

const autocomplete = (prefix, dict) => {
  const answer = [];
  const prefixTree = new Trie();
  dict.forEach(word => prefixTree.addWord(word));
  
  let currentNode = prefixTree.root;
  for (let i = 0; i < prefix.length; i++) {
    const letter = prefix[i];
    if (!currentNode.children[letter]) return false;
    currentNode = currentNode.children[letter];
    if (currentNode.end) answer.push(prefix);
  }
  _iterateOverChildren(currentNode, prefix);
  return answer;

  function _iterateOverChildren(currentNode, prefix) {
    const nodes = Object.values(currentNode.children);
    for (let k = 0; k < nodes.length; k++) {
      const node = nodes[k];
      if (!node) {
        continue;
      }
      if (node.end) {
        answer.push(`${prefix}${node.letter}`);
      }
      else {
        _iterateOverChildren(node, `${prefix}${node.letter}`);
      }
    }
  };
}

const dictionary = ["abc", "acd", "bcd", "def", "a", "aba"];

console.log(autocomplete("a", dictionary)); // "abc", "acd", "a", "aba"
console.log(autocomplete("b", dictionary)); // "bcd"