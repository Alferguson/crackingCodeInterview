// 16. Shortest Path
// ● Question : Given a directed graph, find the shortest path between two nodes if
// one exists.
// ● Eg.
// Directed graph:
// shortestPath(2, 3) = 2 ‑> 5 ‑> 4 ‑> 3

const graph = {
  1: [2],
  2: [5],
  5: [4],
  4: [1, 3],
  3: []
};

const shortestPath = (node1, node2) => {
  const shortestObj = {[node1]: null};
  const visitedQueue = [node1];
  while (visitedQueue.length !== 0) {
    const currNode = visitedQueue.shift();
    if (currNode === node2) break;
    if (graph[currNode].length === 0) continue;
    graph[currNode].forEach( child => {
      if (!shortestObj.hasOwnProperty(child)) {
        visitedQueue.unshift(child);
        shortestObj[child] = currNode;
      }
    });
  }
  let n = node2;
  let answer = [];
  while (n !== null) {
    answer.unshift(n);
    n = shortestObj[n];
  }
  return answer;
}

console.log(shortestPath(2, 3)); // 2 ‑> 5 ‑> 4 ‑> 3