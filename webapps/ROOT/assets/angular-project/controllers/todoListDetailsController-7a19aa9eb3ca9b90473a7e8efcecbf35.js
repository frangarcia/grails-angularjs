'use strict';

/* Controllers */

grailsAngularApp.controller('TodoListDetailsController', ['$scope', '$http', '$location', '$routeParams', 'TodoListDetailsService',
    function ($scope, $http, $location, $routeParams, TodoListDetailsService) {
        $scope.todoList = TodoListDetailsService.query({todoListId:$routeParams['todoListId']});

        $scope.updateTodoList = function(todoList) {
            TodoListDetailsService.update(todoList, function(data) {
                $location.path('todoList');
            });
        }
    }]);
