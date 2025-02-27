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

  toArray() {
  const items = [];
    let currentNode = this.head;

  while(currentNode) {
    items.push(currentNode.data);
    currentNode = currentNode.next;
  }

  return items;
  }
}

const list = new LinkedList();

list.append(3);
list.append(2);
list.append(1);
list.append(5);

console.log(list.toArray());

list.prepend(3);
list.prepend(2);
list.prepend(1);
list.prepend(5);

console.log(list.toArray());

list.find(6);
list.deleteHead();
