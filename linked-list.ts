class Todo {
  task: string;
  nextTodo: any;

  constructor(task: string, nextTodo: any = null){
    this.task = task;
    this.nextTodo = nextTodo;
  }
}