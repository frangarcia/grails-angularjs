'use strict';

/* Controllers */

grailsAngularApp.controller('TodoController', ['$scope', '$location', '$http', 'TodoService', '$routeParams',
    function ($scope, $location, $http, TodoService, $routeParams) {
        $scope.query = '';
        $scope.todos = TodoService.query({max:$routeParams.max});

        $scope.createTodo = function() {
            $scope.path = $location.path('todo/create');
        }

        $scope.editTodo = function(todoId) {
            $scope.path = $location.path('todo/'+todoId);
        }

        $scope.deleteTodo = function(todoId) {
            $http.delete('api/todo/'+todoId).success(function(data) {
                $scope.path = $location.path('todo');
            });
        }
    }]);