interface ITodo {
  title: string;
  description: string;
  completed: boolean;
};

class Todo {
  data: ITodo;
  next: Todo | null = null;
  constructor(title: string, description: string) {
    this.data = {
      title: title,
      description: description,
      completed: false,
    };
  };
};

class TodoList {
  head: Todo | null = null;
  count: number = 0;

  addTodo(title: string, description: string) {
    const newTodo = new Todo(title, description);
    let current = this.head;
    if(!current) {
      this.head = newTodo;
    } else {
      while(current.next) {
        current = current.next;
      };
      current.next = newTodo;
    };
    this.count++;
  };

  getAllTodos() {
    let current = this.head;
    let todos: ITodo[] = [];
    if(!current) {
      console.log('No items in list');
    } else {
      while(current) {
        todos.push(current.data);
        current = current.next;
      };
    };
    console.log(todos);
  };

};

const todoList = new TodoList();
todoList.addTodo('Go to gym', 'Lift weights');
todoList.addTodo('Help mom with Upwork', 'Create her upwork profile');
todoList.addTodo('Play warframe', 'begin a new game');
todoList.getAllTodos();