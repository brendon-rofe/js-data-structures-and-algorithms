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

  printTasks() {
    let current = this.head;
    while(current) {
      console.log(current.task);
      current = current.next;
    };
  };

};

let todoList = new TodoList();
todoList.addTask('Learn linked lists');
todoList.addTask('Learn about JavaScript classes');
todoList.addTask('Practice algorithms');

todoList.printTasks();