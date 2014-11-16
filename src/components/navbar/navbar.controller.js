'use strict';

angular.module('frontend')
  .controller('NavbarCtrl', function ($scope, $state) {
    $scope.$state = $state;
  });
