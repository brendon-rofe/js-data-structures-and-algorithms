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

  // Insert at index

  // Get at index

  // Remove at index

  // Clear list

  // Print list data

};

const linkedList = new LinkedList();
linkedList.insertFirst(100);
console.log(linkedList);