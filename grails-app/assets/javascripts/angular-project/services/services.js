'use strict';

var todoServices = angular.module('todoServices', ['ngResource']);

todoServices.factory('TodoService', ['$resource',
    function ($resource) {
        return $resource('api/todo', {}, {
            query: {method:'GET', params:{max:"@max"}, isArray:true},
            create: {method:'POST'}
        });
    }]);

todoServices.factory('TodoDetailsService', ['$resource',
    function ($resource) {
        return $resource('api/todo/:todoId', {todoId:"@id"}, {
            query: {method:'GET', params:{}, isArray:false},
            update: {method:'PUT'}
        });
    }]);

todoServices.factory('TagService', ['$resource',
    function ($resource) {
        return $resource('api/tag', {}, {
            query: {method:'GET', params:{}, isArray:true},
            create: {method:'POST'}
        });
    }]);

todoServices.factory('TagDetailsService', ['$resource',
    function ($resource) {
        return $resource('api/tag/:tagId', {tagId:"@id"}, {
            query: {method:'GET', params:{}, isArray:false},
            update: {method:'PUT'}
        });
    }]);

todoServices.factory('TodoListService', ['$resource',
    function ($resource) {
        return $resource('api/todoList', {}, {
            query: {method:'GET', params:{}, isArray:true},
            create: {method:'POST'}
        });
    }]);

todoServices.factory('TodoListDetailsService', ['$resource',
    function ($resource) {
        return $resource('api/todoList/:todoListId', {todoListId:"@id"}, {
            query: {method:'GET', params:{}, isArray:false},
            update: {method:'PUT'}
        });
    }]);
