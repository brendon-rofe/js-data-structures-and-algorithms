class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  };
};

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  };

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      };
      current.next = node;
    };
    this.size++;
  };
  // Insert at index
  insertAt(data, index) {
    if(index > 0 && index > this.size) {
      return;
    };
    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    };

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while(count < index) {
      previous = current;
      count++;
      current = current.next;
    };
    node.next = current;
    previous.next = node;

    this.size++;
  };
  // Get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;
    while(current) {
      if(count === index) {
        console.log(current.data);
      };
      count++;
      current = current.next;
    };
    return null;
  };
  // Remove at index
  removeAt(index) {
    if(index > 0 && index > this.size) {
      return;
    };
    let current = this.head;
    let previous;
    let count = 0;

    if(index === 0) {
      this.head = current.next;
    } else {
      while(count < index) {
        count++;
        previous = current;
        current = current.next;
      };
      previous.next = current.next;
    };
    this.size--;
  };
  // Clear list

  // Print list data
  printListData() {
    let current = this.head;
    const data = [];
    while(current) {
      data.push(current.data);
      current = current.next;
    };
    console.log(data);
  };
};

const linkedList = new LinkedList();
linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.insertAt(500, 2);
linkedList.printListData();
linkedList.getAtIndex(2);
linkedList.removeAt(2);
linkedList.printListData();