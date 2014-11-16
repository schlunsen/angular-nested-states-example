'use strict';

angular.module('nestedStatesExample')
  .controller('NavbarCtrl', function ($scope, $state) {
    $scope.$state = $state;
  });
