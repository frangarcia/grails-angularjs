'use strict';

/* Controllers */

grailsAngularApp.controller('TodoController', ['$scope', '$location', 'Todo',
    function ($scope, $location, Todo) {
        $scope.todos = Todo.query();

        $scope.editTodo = function(todoId) {
            $location.path('todo/'+todoId);
        }

        $scope.deleteTodo = function(todoId) {
            $http.delete('todo/'+todoId).success(function(data) {
                $location.path('todo');
            });
        }
    }]);