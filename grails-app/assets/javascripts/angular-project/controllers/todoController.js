'use strict';

/* Controllers */

grailsAngularApp.controller('TodoController',
    function TodoController($scope, $http, $location) {
        $http.get('todo').success(function(data) {
            $scope.todos = data;
        });

        $scope.editTodo = function(todoId) {
            $location.path('todo/'+todoId);
        }
        $scope.deleteTodo = function(todoId) {
            $http.delete('todo/'+todoId).success(function(data) {
                $location.path('todo');
            });
        }
    });