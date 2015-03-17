'use strict';

/* Controllers */

grailsAngularApp.controller('TodoDetailsController', ['$scope', '$http', '$location', '$routeParams', 'TodoDetailsService', 'TodoService', 'TodoListService', 'TagService',
    function ($scope, $http, $location, $routeParams, TodoDetailsService, TodoService, TodoListService, TagService) {
        $scope.todo = TodoDetailsService.query({todoId:$routeParams['todoId']});

        $scope.tags = TagService.query();
        $scope.todoLists = TodoListService.query();

        $scope.updateTodo = function(todo) {
            TodoDetailsService.update(todo, function (data) {
                $location.path('todo');
            });
        }
    }]);
