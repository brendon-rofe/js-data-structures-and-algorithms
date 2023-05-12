class Todo {
  title: string;
  description: string;
  completed: boolean;
  next: Todo | null;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.completed = false;
    this.next = null;
  };
};

class TodoList {
  head: Todo | null;
  constructor() {
    this.head = null
  };
};