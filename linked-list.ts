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