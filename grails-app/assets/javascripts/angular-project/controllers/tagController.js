'use strict';

/* Controllers */

grailsAngularApp.controller('TagController', ['$scope', '$location', '$http', 'TagService',
    function ($scope, $location, $http, TagService) {
        $scope.query = '';
        $scope.tags = TagService.query();

        $scope.createTag = function() {
            $scope.path = $location.path('tag/create');
        }

        $scope.editTag = function(tagId) {
            $scope.path = $location.path('tag/'+tagId);
        }

        $scope.deleteTag = function(tagId) {
            $http.delete('api/tag/'+tagId).success(function(data) {
                $scope.path = $location.path('tag');
            });
        }
    }]);
