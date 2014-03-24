'use strict';

/* Controllers */

grailsAngularApp.controller('TodoListController',
    function TodoListController($scope, $http) {
        $http.get('todoList').success(function(data) {
            $scope.todoLists = data;
        });
    });