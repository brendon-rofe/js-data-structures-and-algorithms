class Node {
  constructor(data, complete = false, next = null) {
  this.data = data;
  this.complete = complete;
  this.next = next;
  };
};

class LinkedList {
  constructor() {
    this.head = null
  };

  addTask(data) {
    const newNode = new Node(data);
    if(!this.head) {
      this.head = newNode;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    };
    current.next = newNode
  };

  displayList() {
    let current = this.head;
    while (current) {
      let status = current.complete ? 'Done' : 'Not done';
      console.log(`${current.data} - ${status}`);
      current = current.next;
    };
  };

};