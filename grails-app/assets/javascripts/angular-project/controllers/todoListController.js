'use strict';

/* Controllers */

grailsAngularApp.controller('TodoListController', ['$scope', '$location', 'TodoList',
    function ($scope, $location, TodoList) {
        $scope.todoLists = TodoList.query();

        $scope.editTodoList = function(todoListId) {
            $location.path('todoList/'+todoListId);
        }

        $scope.deleteTodoList = function(todoListId) {
            $http.delete('todoList/'+todoListId).success(function(data) {
                $location.path('todoList');
            });
        }
    }]);