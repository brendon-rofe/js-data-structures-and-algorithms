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
    } else if(index >= this.amount) {
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

  updateTodo(index: number, title: string, description: string) {
    let current = this.head;
    let count = 0;
    while(current) {
      if(count === index) {
        current.data.title = title;
        current.data.description = description;
      }
      count++;
      current = current.next;
    };
  };

  removeTodo(index: number) {
    let current = this.head;
    let previous;
    let count = 0;
    while(current) {
      if(count === index) {
        if(previous) {
          previous.next = current.next;
          count--;
        };
      };
      count++;
      previous = current
      current = current.next;
    };
  };

};

const todoList = new TodoList();
todoList.addTodo('Go to gym', 'Lift weights');
todoList.addTodo('Help mom with Upwork', 'Create her upwork profile');
todoList.addTodo('Play warframe', 'begin a new game');
todoList.updateTodo(1, 'Help mom with Upwork', 'Create profile');
todoList.removeTodo(2);
// todoList.getTodoByIndex(2);
todoList.getAllTodos();