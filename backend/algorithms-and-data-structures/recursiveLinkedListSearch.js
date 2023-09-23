// Algorithm meant to be a part of the LinkedList class

function findNodeRecursively(data, currentNode = this.head) {
  if (currentNode === null) return null;
  if (currentNode.data === data) return currentNode;
  return this.findNodeRecursively(data, currentNode.next);
}
