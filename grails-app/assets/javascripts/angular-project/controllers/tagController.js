'use strict';

/* Controllers */

grailsAngularApp.controller('TagController', ['$scope', '$location', 'Tag',
    function ($scope, $location, Tag) {
        $scope.tags = Tag.query();

        $scope.editTag = function(tagId) {
            $location.path('tag/'+tagId);
        }

        $scope.deleteTag = function(tagId) {
            $http.delete('tag/'+tagId).success(function(data) {
                $location.path('tag');
            });
        }
    }]);
