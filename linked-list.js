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
        this.count = 0;
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
        this.count++;
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
    return TodoList;
}());
;
var todoList = new TodoList();
todoList.addTodo('Go to gym', 'Lift weights');
todoList.addTodo('Help mom with Upwork', 'Create her upwork profile');
todoList.addTodo('Play warframe', 'begin a new game');
todoList.getAllTodos();
