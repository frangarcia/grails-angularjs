'use strict';

/* Controllers */

grailsAngularApp.controller('TagDetailsController', ['$scope', '$http', '$location', '$routeParams', 'TagDetailsService',
    function ($scope, $http, $location, $routeParams, TagDetailsService) {
        $scope.tag = TagDetailsService.query({tagId:$routeParams['tagId']});

        $scope.updateTag = function(tag) {
            TagDetailsService.update(tag, function (data) {
                $location.path('tag');
            });
        }
    }]);