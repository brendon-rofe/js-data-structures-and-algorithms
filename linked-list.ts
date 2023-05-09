enum Priority {
  Low,
  Medium,
  High
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
};

class Todo {
  data: Todo;
  next: Todo | null;

  constructor(title: string, description: string, priority: Priority) {
    this.data.title = title;
    this.data.description = description;
    this.data.completed = false;
    this.data.priority = priority;
  };
};

class TodoList {
  head: Todo | null;

  constructor() {
    this.head = null;
  };

  

};