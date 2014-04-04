'use strict';

/* Controllers */

grailsAngularApp.controller('TodoListController', ['$scope', '$location', 'TodoListService',
    function ($scope, $location, TodoListService) {
        $scope.todoLists = TodoListService.query();

        $scope.createTodoList = function() {
            $scope.path = $location.path('todoList/create');
        }
        
        $scope.editTodoList = function(todoListId) {
            $scope.path = $location.path('todoList/'+todoListId);
        }

        $scope.deleteTodoList = function(todoListId) {
            $http.delete('todoList/'+todoListId).success(function(data) {
                $scope.path = $location.path('todoList');
            });
        }
    }]);