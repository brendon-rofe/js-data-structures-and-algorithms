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
    };
    ;
    return TodoList;
}());
;
var todoList = new TodoList();
todoList.addTodo('Go to gym', 'Lift weights');
console.log(todoList);
