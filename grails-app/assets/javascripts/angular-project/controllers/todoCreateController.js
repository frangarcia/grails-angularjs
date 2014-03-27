'use strict';

/* Controllers */

grailsAngularApp.controller('TodoCreateController', ['$scope', '$http', '$location', '$routeParams', 'TodoService',
    function ($scope, $http, $location, $routeParams, TodoService) {
        $scope.saveTodo = function(todo) {
            TodoService.create(todo, function (data) {
                $location.path('todo');
            });
        }
    }]);