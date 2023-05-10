class Todo {
  title: string;
  description: string;
  completed: boolean;
  next: Todo | null = null;

  constructor(title: string, description: string) {
    this.title = title,
    this.description = description,
    this.completed = false
  };
};

class TodoList {
  head: Todo | null;

  constructor() {
    this.head = null;
  };

  addTodo(title: string, description: string) {
    const newTodo = new Todo(title, description);
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

  getAllTodos() {
    const todos: Todo[] = [];
    let current = this.head;
    while(current) {
      todos.push(current)
      current = current.next;
    };
    console.log(todos);
  };

};

let todoList = new TodoList();

todoList.addTodo('Go to gas and more', 'Get new heater and check lamp');
todoList.addTodo('Learn linked lists', 'Practice creating linked lists');
todoList.getAllTodos();