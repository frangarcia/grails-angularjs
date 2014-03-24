'use strict';

/* Controllers */

grailsAngularApp.controller('NavBarController',
    function NavBarController($scope, $location) {
        $scope.routeIs = function(routeName) {
            return $location.path() === routeName;
        };
    });
