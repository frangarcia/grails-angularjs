'use strict';

/* Controllers */

grailsAngularApp.controller('TagDetailsController',
    function TagDetailsController($scope, $http, $location, $routeParams) {
        $http.get('tag/'+$routeParams['tagId']).success(function(data) {
            $scope.tag = data;
        });

        $scope.updateTag = function(tag) {
            $http.put('tag/'+tag.id, tag).success(function(data) {
                $location.path('tag');
            });
        }
    });