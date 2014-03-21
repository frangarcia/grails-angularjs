'use strict';


// Declare app level module which depends on filters, and services
angular.module('grailsAngularApp', [
    'ngRoute',
//    'grailsAngularApp.filters',
//    'grailsAngularApp.services',
//    'grailsAngularApp.directives',
    'grailsAngularApp.controllers'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/todo', {templateUrl: 'todo/list', controller: 'TodoController'});
        $routeProvider.when('/tag', {templateUrl: 'tag/list', controller: 'TagController'});
        $routeProvider.when('/todolist', {templateUrl: 'todoList/list', controller: 'TodoListController'});
        $routeProvider.otherwise({redirectTo: '/todo'});
    }]);
