'use strict';

/* Controllers */

grailsAngularApp.controller('NavBarController',
    ["$scope", "$location", function NavBarController($scope, $location) {
        $scope.routeIs = function(routeName) {
            return $location.path().indexOf(routeName) == 0
        };
    }]);

