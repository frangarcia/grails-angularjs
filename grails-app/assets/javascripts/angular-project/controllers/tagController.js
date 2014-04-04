'use strict';

/* Controllers */

grailsAngularApp.controller('TagController', ['$scope', '$location', 'TagService',
    function ($scope, $location, TagService) {
        $scope.tags = TagService.query();

        $scope.createTag = function() {
            $scope.path = $location.path('tag/create');
        }

        $scope.editTag = function(tagId) {
            $scope.path = $location.path('tag/'+tagId);
        }

        $scope.deleteTag = function(tagId) {
            $http.delete('tag/'+tagId).success(function(data) {
                $scope.path = $location.path('tag');
            });
        }
    }]);
