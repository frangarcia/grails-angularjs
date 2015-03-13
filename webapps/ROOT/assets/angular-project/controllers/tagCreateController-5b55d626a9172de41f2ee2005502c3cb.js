'use strict';

/* Controllers */

grailsAngularApp.controller('TagCreateController', ['$scope', '$http', '$location', '$routeParams', 'TagService',
    function ($scope, $http, $location, $routeParams, TagService) {
        $scope.saveTag = function(tag) {
            TagService.create(tag, function (data) {
                $location.path('tag');
            });
        }
    }]);
