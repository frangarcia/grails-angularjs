'use strict';

/* Controllers */

angular.module('grailsAngularApp.controllers', [])
    .controller('TodoController', ['$scope', '$http', function($scope, $http) {
        $http.get('todo').success(function(data) {
            $scope.todos = data;
        });
    }])
    .controller('TagController', ['$scope', '$http', function($scope, $http) {
        $http.get('tag').success(function(data) {
            $scope.tags = data;
        });
    }])
    .controller('TodoListController', ['$scope', '$http', function($scope, $http) {
        $http.get('todoList').success(function(data) {
            $scope.todoLists = data;
        });
    }]);