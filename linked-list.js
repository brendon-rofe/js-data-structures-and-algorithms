var Todo = /** @class */ (function () {
    function Todo(title, description) {
        this.next = null;
        this.title = title,
            this.description = description,
            this.completed = false;
    }
    ;
    return Todo;
}());
;
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.head = null;
    }
    ;
    TodoList.prototype.addTodo = function (title, description) {
        var newTodo = new Todo(title, description);
        if (!this.head) {
            this.head = newTodo;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            ;
            current.next = newTodo;
        }
        ;
    };
    ;
    TodoList.prototype.getAllTodos = function () {
        var todos = [];
        var current = this.head;
        while (current) {
            todos.push(current);
            current = current.next;
        }
        ;
        console.log(todos);
    };
    ;
    return TodoList;
}());
;
var todoList = new TodoList();
todoList.addTodo('Go to gas and more', 'Get new heater and check lamp');
todoList.addTodo('Learn linked lists', 'Practice creating linked lists');
todoList.getAllTodos();
