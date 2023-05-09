enum Priority {
  Low,
  Medium,
  High
};

interface ITodo {
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
};

class Todo {
  data: ITodo;
  next: Todo | null;

  constructor(title: string, description: string, priority: Priority) {
    this.data = {
      title: title,
      description: description,
      completed: false,
      priority: priority
    }
  };
};

class TodoList {
  head: Todo | null;

  constructor() {
    this.head = null;
  };

  addTodo(title: string, description: string, priority: Priority) {
    const newTodo = new Todo(title, description, priority);
    if(!this.head) {
      this.head = newTodo;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newTodo;
    };
  };

  getAllTodos() {
    let current = this.head;
    let todos: Todo[] = []
    while(current) {
      todos.push(current);
      current = current.next;
    };
    console.log(todos);
  };

};

const todoList = new TodoList();

todoList.addTodo('First todo', 'This is the first todo', Priority.Medium);
todoList.addTodo('Second todo', 'This is the second todo', Priority.Low);
todoList.getAllTodos();