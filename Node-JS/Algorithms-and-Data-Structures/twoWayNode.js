class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) return (this.next = node);
    throw new Error('Next node must be a member of the Node class');
  }

  setPreviousNode(node) {
    if (node instanceof Node || node === null) return (this.previous = node);
    throw new Error('Previous node must be a member of the Node class');
  }

  getNextNode() {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

module.exports = Node;
