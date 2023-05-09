var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 0] = "Low";
    Priority[Priority["Medium"] = 1] = "Medium";
    Priority[Priority["High"] = 2] = "High";
})(Priority || (Priority = {}));
;
;
var Todo = /** @class */ (function () {
    function Todo(title, description, priority) {
        this.data = {
            title: title,
            description: description,
            completed: false,
            priority: priority
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
    ;
    TodoList.prototype.addTodo = function (title, description, priority) {
        var newTodo = new Todo(title, description, priority);
        if (!this.head) {
            this.head = newTodo;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newTodo;
        }
        ;
    };
    ;
    TodoList.prototype.getAllTodos = function () {
        var current = this.head;
        var todos = [];
        while (current) {
            todos.push(current);
            current = current.next;
        }
        ;
        console.log(todos);
    };
    ;
    TodoList.prototype.getTodoByIndex = function (index) {
        var current = this.head;
        var count = 0;
        while (current) {
            if (count === index) {
                console.log(current.data);
            }
            ;
            count++;
            current = current.next;
        }
        ;
        return null;
    };
    ;
    return TodoList;
}());
;
var todoList = new TodoList();
todoList.addTodo('First todo', 'This is the first todo', Priority.Medium);
todoList.addTodo('Second todo', 'This is the second todo', Priority.Low);
// todoList.getAllTodos();
todoList.getTodoByIndex(1);
