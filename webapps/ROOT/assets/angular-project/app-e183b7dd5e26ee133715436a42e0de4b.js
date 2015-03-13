'use strict';

var grailsAngularApp = angular.module('grailsAngularApp', ['ngRoute', 'todoServices']);

grailsAngularApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
        when('/todo/', {
            templateUrl: 'assets/angular-project/partials/todo/list.html',
            controller: 'TodoController'
        }).
        when('/todo/create', {
            templateUrl: 'assets/angular-project/partials/todo/create.html',
            controller: 'TodoCreateController'
        }).
        when('/todo/:todoId', {
            templateUrl: 'assets/angular-project/partials/todo/edit.html',
            controller: 'TodoDetailsController'
        }).
        when('/tag/', {
            templateUrl: 'assets/angular-project/partials/tag/list.html',
            controller: 'TagController'
        }).
        when('/tag/create', {
            templateUrl: 'assets/angular-project/partials/tag/create.html',
            controller: 'TagCreateController'
        }).
        when('/tag/:tagId', {
            templateUrl: 'assets/angular-project/partials/tag/edit.html',
            controller: 'TagDetailsController'
        }).
        when('/todoList/', {
            templateUrl: 'assets/angular-project/partials/todoList/list.html',
            controller: 'TodoListController'
        }).
        when('/todoList/create', {
            templateUrl: 'assets/angular-project/partials/todoList/create.html',
            controller: 'TodoListCreateController'
        }).
        when('/todoList/:todoListId', {
            templateUrl: 'assets/angular-project/partials/todoList/edit.html',
            controller: 'TodoListDetailsController'
        }).
        otherwise({redirectTo:'/todo/'});
}]);

