interface ITodo {
  title: string;
  description: string;
  completed: boolean;
};

class Todo {
  data: ITodo;
  next: ITodo | null = null;
  constructor(title: string, description: string) {
    this.data.title = title;
    this.data.description = description;
    this.data.completed = false;
  };
};

