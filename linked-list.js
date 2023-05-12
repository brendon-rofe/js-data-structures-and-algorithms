var Todo = /** @class */ (function () {
    function Todo(title, description) {
        this.title = title;
        this.description = description;
        this.completed = false;
        this.next = null;
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
        var currentTodo = this.head;
        if (!currentTodo) {
            this.head = newTodo;
        }
        else {
            currentTodo.next = newTodo;
        }
        ;
    };
    ;
    return TodoList;
}());
;
var todoList = new TodoList();
todoList.addTodo('Go to the gym', 'Lift weights');
console.log(todoList);
