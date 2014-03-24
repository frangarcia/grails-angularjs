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

        $scope.deleteTag = function(tagId) {
            $http.delete('tag/'+tagId).success(function(data) {
                $location.path('tag');
            });
        }
    });
