'use strict';

/* Controllers */

grailsAngularApp.controller('TodoCreateController', ['$scope', '$http', '$location', '$routeParams', 'TodoService', 'TagService', 'TodoListService',
    function ($scope, $http, $location, $routeParams, TodoService, TagService, TodoListService) {

        $scope.tags = TagService.query();
        $scope.todoLists = TodoListService.query();

        $scope.tagsSelected = {};

        $scope.saveTodo = function(todo) {
            TodoService.create(todo, function (data) {
                $location.path('todo');
            });
        }
    }]);
