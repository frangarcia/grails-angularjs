'use strict';

var todoServices = angular.module('todoServices', ['ngResource']);

todoServices.factory('Todo', ['$resource',
    function ($resource) {
        return $resource('todo', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);

todoServices.factory('Tag', ['$resource',
    function ($resource) {
        return $resource('tag', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);

todoServices.factory('TodoList', ['$resource',
    function ($resource) {
        return $resource('todoList', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);
