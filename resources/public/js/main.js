"use strict";

// only property in global namespace/scope
// This is important, need the empty array signature. 
var app = angular.module("TodosApp", []);

app.filter("reverse", [
	function() {
		return function(txt) {
			return prefix + ' ' + txt.split('').reverse().join('');
		}
	}
]);

app.factory("factory", [
	function() {
		var counter = 0,
		todos = [
			{id:++counter, text: "Learn Angular", done:true},
			{id:++counter, text: "Get Money", done:false},
			{id:++counter, text: "Get More Money", done:false},
			{id:++counter, text: "Take over the world", done:false},
		];

		function markDone(t) {
            console.log(t);
            if(!t.done) {
                t.done = new Date().getTime();
            } else {
                delete t.done;
            }
        };

		function addNewTodo(obj, todos) {
			todos.push({id:++counter, text: obj.newTodoText});
			obj.newTodoText = '';
		};

		return {
			todos: todos,
			markDone: markDone,
			addNewTodo: addNewTodo
		}
	}
]);


app.controller("MainCtrl", [
	"factory",
	function(f) {
		var main = this;
		main.todos = f.todos;
		main.markDone = f.markDone;
		main.addNewTodo = f.addNewTodo;
	}
]);


//var app = angular.module("TodosApp", []).controller("", []);

