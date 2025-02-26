class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
}

prepend(value) {
  const newNode = new Node(value, this.head);
  
  this.head = newNode;
  this.tail = this.tail ? this.tail : newNode;

  return this;
}

append(value) {
  const newNode = new Node(value, null);

  this.head = this.head ? this.head : newNode;
  this.tail = newNode;

  return this;
}

find(value) {
  let currentNode = this.head;
  
  while(currentNode) {
    if(urrentNode.data === value) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  
  return null;
}

deleteHead() {
  if(!this.head) {
    return;
  }

  if(this.head.next) {
    this.head = this.head.next;
  } else {
    this.head = null;
    this.tail = null;
  }
}
