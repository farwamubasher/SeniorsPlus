console.log("hi");

("use strict");

// Declare app level module which depends on views, and components
angular.module("todoapp", []).controller("TodoListController", function() {
  var todoList = this;
  todoList.todos = [
    { text: "Ciprofloxacin at 1:00pm", done: false },
    { text: "Paracetamol at 3:00 pm ", done: false },
    { text: "Linezolid at 5:00pm", done: false }
  ];

  todoList.addTodo = function() {
    todoList.todos.push({ text: todoList.todoText, done: false });
    todoList.todoText = "";
  };

  todoList.remaining = function() {
    var count = 0;
    angular.forEach(todoList.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.archive = function() {
    var oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) todoList.todos.push(todo);
    });
  };
});
