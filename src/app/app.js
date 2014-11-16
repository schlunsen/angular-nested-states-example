'use strict';

angular.module('nestedStatesExample', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, CustomerStates) {
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          'header': {
            templateUrl: 'app/common/header.html',
            controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: 'app/common/footer.html',
            controller: 'FooterCtrl'
          }
        }

      })
      .state('root.main', {
        url: '/',
        views: {
          'container@': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('root.about', {
        url: '/about',
        views: {
          'container@': {
            templateUrl: 'app/common/about.html',
            controller: 'AboutCtrl'
          }
        }
      })

      .state('root.boxview', {
        url: '/box',
        views: {
          'container@': {
            controller: 'BoxViewCtrl',
            templateUrl: 'app/common/boxview.html'
          }
        }
      });

    // Inject customer states
    angular.forEach(CustomerStates, function(state){
      $stateProvider.state(state.name, state.options);
    });


    $urlRouterProvider.otherwise('/');
  })
;
