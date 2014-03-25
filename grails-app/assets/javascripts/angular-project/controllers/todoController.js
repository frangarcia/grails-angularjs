'use strict';

/* Controllers */

grailsAngularApp.controller('TodoController', ['$scope', '$location', 'TodoService',
    function ($scope, $location, TodoService) {
        $scope.todos = TodoService.query();

        $scope.editTodo = function(todoId) {
            $location.path('todo/'+todoId);
        }

        $scope.deleteTodo = function(todoId) {
            $http.delete('todo/'+todoId).success(function(data) {
                $location.path('todo');
            });
        }
    }]);