const depthFirstTraversal = (
  start,
  callback = (vertex) => {
    console.log(vertex.data);
  },
  visitedVertices = [start]
) => {
  callback(start);

  start.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }
  });
};

// example: depthFirstTraversal(testGraph.vertices[0]);

module.exports = depthFirstTraversal;
