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
  };

};

const todoList = new TodoList();
todoList.addTodo('Go to gym', 'Lift weights');
console.log(todoList);