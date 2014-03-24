'use strict';

/* Controllers */

grailsAngularApp.controller('TodoListController',
    function TodoListController($scope, $http, $location) {
        $http.get('todoList').success(function(data) {
            $scope.todoLists = data;
        });

        $scope.editTodoList = function(todoListId) {
            $location.path('todoList/'+todoListId);
        }

        $scope.deleteTodoList = function(todoListId) {
            $http.delete('todoList/'+todoListId).success(function(data) {
                $location.path('todoList');
            });
        }
    });