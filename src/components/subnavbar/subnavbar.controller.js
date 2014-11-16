'use strict';

angular.module('nestedStatesExample')
  .controller('SubNavbarCtrl', function ($scope, $state) {
    $scope.$state = $state;

  });
