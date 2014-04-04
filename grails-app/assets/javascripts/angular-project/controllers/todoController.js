'use strict';

/* Controllers */

grailsAngularApp.controller('TodoController', ['$scope', '$location', 'TodoService',
    function ($scope, $location, TodoService) {
        $scope.todos = TodoService.query();

        $scope.createTodo = function() {
            $scope.path = $location.path('todo/create');
        }

        $scope.editTodo = function(todoId) {
            $scope.path = $location.path('todo/'+todoId);
        }

        $scope.deleteTodo = function(todoId) {
            $http.delete('todo/'+todoId).success(function(data) {
                $scope.path = $location.path('todo');
            });
        }
    }]);