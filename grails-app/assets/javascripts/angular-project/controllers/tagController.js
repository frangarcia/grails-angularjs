'use strict';

/* Controllers */

grailsAngularApp.controller('TagController',
    function TagController($scope, $http) {
        $http.get('tag').success(function(data) {
            $scope.tags = data;
        });
    });
