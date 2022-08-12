function swapNodes(list, data1, data2) {
  let node1Prev = null;
  let node2Prev = null;
  let node1 = list.head;
  let node2 = list.head;

  // Elements are the same — no swap needed.
  if (data1 === data2) return;

  // Looking for node with data1
  while (node1 !== null) {
    if (node1.data === data1) break;

    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  // Looking for node with data2
  while (node2 !== null) {
    if (node2.data === data2) break;
    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  // Swap not possible — one or more elements not in the list.
  if (node1 === null || node2 === null) return;

  // Checking if one of the nodes is the head.
  // Setting .next of previous nodes.
  if (node1Prev === null) list.head = node2;
  else node1Prev.setNextNode(node2);
  if (node2Prev === null) list.head = node1;
  else node2Prev.setNextNode(node1);

  // Setting .next of the nodes swapped.
  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}

module.exports = swapNodes;
