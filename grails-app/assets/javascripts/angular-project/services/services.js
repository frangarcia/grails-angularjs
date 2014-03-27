'use strict';

var todoServices = angular.module('todoServices', ['ngResource']);

todoServices.factory('TodoService', ['$resource',
    function ($resource) {
        return $resource('todo', {}, {
            query: {method:'GET', params:{}, isArray:true},
            create: {method:'POST'}
        });
    }]);

todoServices.factory('TodoDetailsService', ['$resource',
    function ($resource) {
        return $resource('todo/:todoId', {todoId:"@id"}, {
            query: {method:'GET', params:{}, isArray:false},
            update: {method:'PUT'}
        });
    }]);

todoServices.factory('TagService', ['$resource',
    function ($resource) {
        return $resource('tag', {}, {
            query: {method:'GET', params:{}, isArray:true},
            create: {method:'POST'}
        });
    }]);

todoServices.factory('TagDetailsService', ['$resource',
    function ($resource) {
        return $resource('tag/:tagId', {tagId:"@id"}, {
            query: {method:'GET', params:{}, isArray:false},
            update: {method:'PUT'}
        });
    }]);

todoServices.factory('TodoListService', ['$resource',
    function ($resource) {
        return $resource('todoList', {}, {
            query: {method:'GET', params:{}, isArray:true},
            create: {method:'POST'}
        });
    }]);

todoServices.factory('TodoListDetailsService', ['$resource',
    function ($resource) {
        return $resource('todoList/:todoListId', {todoListId:"@id"}, {
            query: {method:'GET', params:{}, isArray:false},
            update: {method:'PUT'}
        });
    }]);
