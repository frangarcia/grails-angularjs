'use strict';

/* Controllers */

grailsAngularApp.controller('TodoListCreateController', ['$scope', '$http', '$location', '$routeParams', 'TodoListService',
    function ($scope, $http, $location, $routeParams, TodoListService) {
        $scope.saveTodoList = function(todoList) {
            TodoListService.create(todoList, function (data) {
                $location.path('todoList');
            });
        }
    }]);