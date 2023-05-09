class Todo {
  task: string;
  nextTodo: any;

  constructor(task: string, nextTodo: any = null){
    this.task = task;
    this.nextTodo = nextTodo;
  };
};

class TodoList {
  head: any;
  constructor() {
    this.head = null;
  };

  addTask(task: string) {
    const newTodo = new Todo(task);
    this.head = newTodo
  };

};