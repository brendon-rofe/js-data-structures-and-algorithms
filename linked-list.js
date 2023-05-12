;
var Todo = /** @class */ (function () {
    function Todo(title, description) {
        this.next = null;
        this.data = {
            title: title,
            description: description,
            completed: false,
        };
    }
    ;
    return Todo;
}());
;
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.head = null;
        this.amount = 0;
    }
    TodoList.prototype.addTodo = function (title, description) {
        var newTodo = new Todo(title, description);
        var current = this.head;
        if (!current) {
            this.head = newTodo;
        }
        else {
            while (current.next) {
                current = current.next;
            }
            ;
            current.next = newTodo;
        }
        ;
        this.amount++;
    };
    ;
    TodoList.prototype.getAllTodos = function () {
        var current = this.head;
        var todos = [];
        if (!current) {
            console.log('No items in list');
        }
        else {
            while (current) {
                todos.push(current.data);
                current = current.next;
            }
            ;
        }
        ;
        console.log(todos);
    };
    ;
    TodoList.prototype.getTodoByIndex = function (index) {
        var current = this.head;
        var count = 0;
        if (!current) {
            console.log('The todo list is empty');
        }
        else if (index >= this.amount) {
            console.log('There is no item at that todo');
        }
        while (current) {
            if (count === index) {
                console.log(current.data);
            }
            ;
            count++;
            current = current.next;
        }
        ;
    };
    ;
    TodoList.prototype.updateTodo = function (index, title, description) {
        var current = this.head;
        var count = 0;
        while (current) {
            if (count === index) {
                current.data.title = title;
                current.data.description = description;
            }
            count++;
            current = current.next;
        }
        ;
    };
    ;
    TodoList.prototype.removeTodo = function (index) {
        var current = this.head;
        var previous;
        var count = 0;
        while (current) {
            if (count === index) {
                if (previous) {
                    previous.next = current.next;
                    count--;
                }
                ;
            }
            ;
            count++;
            previous = current;
            current = current.next;
        }
        ;
    };
    ;
    return TodoList;
}());
;
var todoList = new TodoList();
todoList.addTodo('Go to gym', 'Lift weights');
todoList.addTodo('Help mom with Upwork', 'Create her upwork profile');
todoList.addTodo('Play warframe', 'begin a new game');
todoList.updateTodo(1, 'Help mom with Upwork', 'Create profile');
todoList.removeTodo(2);
// todoList.getTodoByIndex(2);
todoList.getAllTodos();
