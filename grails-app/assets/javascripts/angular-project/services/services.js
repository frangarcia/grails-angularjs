'use strict';

var todoServices = angular.module('todoServices', ['ngResource']);

todoServices.factory('TodoService', ['$resource',
    function ($resource) {
        return $resource('todo', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);

todoServices.factory('TodoDetailsService', ['$resource',
    function ($resource) {
        return $resource('todo/:todoId', {}, {
            query: {method:'GET', params:{}, isArray:false}
        });
    }]);

todoServices.factory('TagService', ['$resource',
    function ($resource) {
        return $resource('tag', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);

todoServices.factory('TagDetailsService', ['$resource',
    function ($resource) {
        return $resource('tag/:tagId', {}, {
            query: {method:'GET', params:{}, isArray:false}
        });
    }]);

todoServices.factory('TodoListService', ['$resource',
    function ($resource) {
        return $resource('todoList', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);

todoServices.factory('TodoListDetailsService', ['$resource',
    function ($resource) {
        return $resource('todoList/:todoListId', {}, {
            query: {method:'GET', params:{}, isArray:false}
        });
    }]);
