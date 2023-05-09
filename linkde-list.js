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
    const newTodo = new Todo();
    if(!this.head) {
      this.head = newTodo
    };
    this.head.next = newTodo;
  };

};

let todoList = new TodoList();
todoList.addTask('Learn linked lists');