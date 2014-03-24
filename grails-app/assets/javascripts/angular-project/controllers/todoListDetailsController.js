'use strict';

/* Controllers */

grailsAngularApp.controller('TodoListDetailsController',
    function TodoListDetailsController($scope, $http, $location, $routeParams) {
        $http.get('todoList/'+$routeParams['todoListId']).success(function(data) {
            $scope.todoList = data;
        });

        $scope.updateTodoList = function(todoList) {
            $http.put('todoList/'+todoList.id, todoList).success(function(data) {
                $scope.todoList = data;
            });
        }
    });