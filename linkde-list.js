class Todo {
  constructor(task, next = null) {
    this.task = task;
    this.next = next;
  };
};

class TodoList {
  constructor() {
    this.head = null;
  };

  addTask(task) {
    const newTodo = new Todo(task);
    if(!this.head) {
      this.head = newTodo;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      };
      current.next = newTodo;
    };
    
  };



};

let todoList = new TodoList();
todoList.addTask('Learn linked lists');