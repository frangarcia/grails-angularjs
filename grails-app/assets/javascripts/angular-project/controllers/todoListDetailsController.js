'use strict';

/* Controllers */

grailsAngularApp.controller('TodoListDetailsController', ['$scope', '$http', '$location', '$routeParams', 'TodoListDetailsService',
    function ($scope, $http, $location, $routeParams, TodoListDetailsService) {
        $scope.todoList = TodoListDetailsService.query({todoListId:$routeParams['todoListId']});

        $scope.updateTodoList = function(todoList) {
            $http.put('todoList/'+todoList.id, todoList).success(function(data) {
                $location.path('todoList');
            });
        }
    }]);