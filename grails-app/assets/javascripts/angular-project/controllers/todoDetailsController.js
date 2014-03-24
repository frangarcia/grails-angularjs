'use strict';

/* Controllers */

grailsAngularApp.controller('TodoDetailsController',
    function TodoDetailsController($scope, $http, $location, $routeParams) {
        $http.get('todo/'+$routeParams['todoId']).success(function(data) {
            $scope.todo = data;
        });

        $scope.updateTodo = function(todo) {
            $http.put('todo/'+todo.id, todo).success(function(data) {
                $scope.todo = data;
            });
        }
    });