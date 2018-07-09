'use strict';

angular.module('videostoreApp')
    .controller('NavbarController', function ($scope, $location, $state, Auth, Principal, ENV) {
        $scope.isAuthenticated = Principal.isAuthenticated;
        $scope.$state = $state;
        $scope.inProduction = ENV === 'dev';

        $scope.logout = function () {
            Auth.logout();
            $state.go('home');
        };
    });
