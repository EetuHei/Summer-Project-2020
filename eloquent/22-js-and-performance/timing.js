function findPath(a, b) {
  let workList = [[a]];
  for (let path of workList) {
    let endOfCurrPath = path[path.length - 1];
    if (endOfCurrPath == b) {
      return path;
    }
    for (let next of endOfCurrPath.edges) {
      if (!workList.some((path) => path[path.length - 1] == next)) {
        workList.push(path.concat([next]));
      }
    }
  }
}

function time(findPath) {
  let graph = treeGraph(6, 6);
  // get current time
  let startTime = Date.now();
  // result of the findPath
  let result = findPath(graph[0], graph[graph.length - 1]);
  // log the result and time it took in ms to get the result 
  console.log(
    `Path with length ${result.length} found in ${Date.now() - startTime} ms`
  );
}
time(findPath)
