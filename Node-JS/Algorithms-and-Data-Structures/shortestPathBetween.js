const dijkstras = require('./dijkstras.js');

const shortestPathBetween = (graph, startVertex, endVertex) => {
  const { distances, previous } = dijkstras(graph, startVertex);
  const distance = distances[endVertex.data];
  let path = [];
  let vertex = endVertex;
  while (vertex) {
    path.unshift(vertex);
    vertex = previous[vertex.data];
  }
  return { distance, path };
};

module.exports = shortestPathBetween;
