function findPath(a, b) {
  // starting node
  let workList = [[a]];
  for (let path of workList) {
    // get end of current path and if it's goal node, return path
    let endOfCurrPath = path[path.length - 1];
    if (endOfCurrPath == b) {
      return path;
    }
    // for each neighbor of the node at the end of the path, if that node has not been looked at before
    // create a new path by extending the current path with that neighbor and add it to the work list.
    for (let next of endOfCurrPath.edges) {
      if (!workList.some((path) => path[path.length - 1] == next)) {
        workList.push(path.concat([next]));
      }
    }
  }
}

let graph = treeGraph(4, 4);
let root = graph[0],
  leaf = graph[graph.length - 1];
console.log(findPath(root, leaf).length);
// → 4

leaf.connect(root);
console.log(findPath(root, leaf).length);
// → 2
