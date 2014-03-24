'use strict';

/* Controllers */

grailsAngularApp.controller('TagController',
    function TagController($scope, $http, $location) {
        $http.get('tag').success(function(data) {
            $scope.tags = data;
        });

        $scope.editTag = function(tagId) {
            $location.path('tag/'+tagId);
        }
    });
