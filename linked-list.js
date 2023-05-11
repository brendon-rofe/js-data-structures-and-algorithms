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

  // Get at index

  // Remove at index

  // Clear list

  // Print list data
  printListData() {
    let current = this.head;

    while(current) {
      console.log(current.data);
      current = current.next;
    };
  };
};

const linkedList = new LinkedList();
linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.printListData();