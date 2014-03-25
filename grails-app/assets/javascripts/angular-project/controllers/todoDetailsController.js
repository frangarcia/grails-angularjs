'use strict';

/* Controllers */

grailsAngularApp.controller('TodoDetailsController', ['$scope', '$http', '$location', '$routeParams', 'TodoDetailsService', 'TodoService',
    function ($scope, $http, $location, $routeParams, TodoDetailsService, TodoService) {
        $scope.todo = TodoDetailsService.query({todoId:$routeParams['todoId']});

        $scope.updateTodo = function(todo) {
            $http.put('todo/'+todo.id, todo).success(function(data) {
                $location.path('todo');
            });
        }
    }]);