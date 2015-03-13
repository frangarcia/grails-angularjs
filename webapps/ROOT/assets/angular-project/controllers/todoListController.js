'use strict';

/* Controllers */

grailsAngularApp.controller('TodoListController', ['$scope', '$location', '$http', 'TodoListService',
    function ($scope, $location, $http, TodoListService) {
        $scope.query = '';
        $scope.todoLists = TodoListService.query();

        $scope.createTodoList = function() {
            $scope.path = $location.path('todoList/create');
        }
        
        $scope.editTodoList = function(todoListId) {
            $scope.path = $location.path('todoList/'+todoListId);
        }

        $scope.deleteTodoList = function(todoListId) {
            $http.delete('api/todoList/'+todoListId).success(function(data) {
                $scope.path = $location.path('todoList');
            });
        }
    }]);
