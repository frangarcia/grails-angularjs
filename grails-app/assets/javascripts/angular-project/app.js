'use strict';

var grailsAngularApp = angular.module('grailsAngularApp', ['ngRoute']);

grailsAngularApp.config(function($routeProvider) {
    $routeProvider.
        when('/todo', {
            templateUrl: 'assets/angular-project/partials/todo/list.html',
            controller: 'TodoController'
        }).
        when('/todo/:todoId', {
            templateUrl: 'assets/angular-project/partials/todo/edit.html',
            controller: 'TodoDetailsController'
        }).
        when('/tag', {
            templateUrl: 'assets/angular-project/partials/tag/list.html',
            controller: 'TagController'
        }).
        when('/tag/:tagId', {
            templateUrl: 'assets/angular-project/partials/tag/edit.html',
            controller: 'TagDetailsController'
        }).
        when('/todoList', {
            templateUrl: 'assets/angular-project/partials/todoList/list.html',
            controller: 'TodoListController'
        }).
        when('/todoList/:todoListId', {
            templateUrl: 'assets/angular-project/partials/todoList/edit.html',
            controller: 'TodoListDetailsController'
        }).
        otherwise({redirectTo:'/todo'});
});
