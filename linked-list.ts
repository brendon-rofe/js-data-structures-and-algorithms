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
  amount: number = 0;

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
    this.amount++;
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

  getTodoByIndex(index: number) {
    let current = this.head;
    let count = 0;
    if(!current) {
      console.log('The todo list is empty');
    } else if(index > this.amount) {
      console.log('There is no item at that todo');
    }
    while(current) {
      if(count === index) {
        console.log(current.data);
      };
      count++;
      current = current.next;
    };
  };

};

const todoList = new TodoList();
todoList.addTodo('Go to gym', 'Lift weights');
todoList.addTodo('Help mom with Upwork', 'Create her upwork profile');
todoList.addTodo('Play warframe', 'begin a new game');
todoList.getTodoByIndex(2);
// todoList.getAllTodos();