'use strict';

/* Controllers */

angular.module('grailsAngularApp.controllers', [])
    .controller('TodoController', ['$scope', function($scope) {
        console.log('TodoController');
        $scope.todos = [
            {
                title:'First todo',
                content:'Content of first todo',
                url:'http://www.ua.es'
            },
            {
                title:'Second todo',
                content:'Content of second todo',
                url:'http://www.ua.es'
            },
            {
                title:'Third todo',
                content:'Content of third todo',
                url:'http://www.ua.es'
            }];
    }])
    .controller('TagController', ['$scope', function($scope) {
        $scope.tags = [
            {
                name:'First tag'
            },
            {
                name:'Second tag'
            },
            {
                name:'Third tag'
            }];
    }])
    .controller('TodoListController', ['$scope', function($scope) {
        $scope.todolists = [
            {
                name:'First todo list'
            },
            {
                name:'Second todo list'
            },
            {
                name:'Third todo list'
            }];
    }]);