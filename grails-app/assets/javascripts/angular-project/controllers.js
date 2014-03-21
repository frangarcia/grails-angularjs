'use strict';

/* Controllers */

angular.module('grailsAngularApp.controllers', []).
    controller('TodoController', [function() {
        console.log('TodoController');
    }])
    .controller('TagController', [function() {
        console.log('TagController');
    }])
    .controller('TodoListController', [function() {
        console.log('TodoListController');
    }]);