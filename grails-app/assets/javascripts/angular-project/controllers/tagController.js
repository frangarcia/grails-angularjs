'use strict';

/* Controllers */

grailsAngularApp.controller('TagController', ['$scope', '$location', 'TagService',
    function ($scope, $location, TagService) {
        $scope.tags = TagService.query();

        $scope.createTag = function() {
            $location.path('tag/create');
        }

        $scope.editTag = function(tagId) {
            $location.path('tag/'+tagId);
        }

        $scope.deleteTag = function(tagId) {
            $http.delete('tag/'+tagId).success(function(data) {
                $location.path('tag');
            });
        }
    }]);
