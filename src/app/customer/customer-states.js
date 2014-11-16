var app = angular.module('nestedStatesExample');

app.constant('CustomerStates', [
  {
    name: 'root.customer',
    options: {
      url: '/customer',
      abstract: true,
      views: {
        'container@': {
          templateUrl: 'app/customer/customer.html',
          controller: function ($scope, $state) {
            $scope.$state = $state;
          }
        }

      }
    }
  },{
    name: 'root.customer.info',
    options: {
      url: '/info',
      views: {
        'customerhead': {
          templateUrl: 'app/customer/customer-head.html'
        },
        'customercontainer': {
          templateUrl: 'app/customer/customer-info.html'
        }

      }
    }
  },
  {
    name: 'root.customer.settings',
    options: {
      url: '/settings',
      views: {
        'customerhead': {
          templateUrl: 'app/customer/customer-head.html'
        },
        'customercontainer': {
          templateUrl: 'app/customer/customer-settings.html'
        }

      }
    }
  },
  {
    name: 'root.customer.account',
    options: {
      url: '/account',
      abstract: true,
      views: {
        'customerhead': {
          templateUrl: 'app/customer/customer-head.html'
        },
        'customercontainer': {
          templateUrl: 'app/customer/customer-account.html'
        }

      }
    }
  },
  {
    name: 'root.customer.account.list',
    options: {
      url: '/list',
      views: {
        'customeraccountcontainer': {
          templateUrl: 'app/customer/customer-account-list.html'
        }
      }
    }
  },
  {
    name: 'root.customer.account.detail',
    options: {
      url: '/detail',
      views: {
        'customeraccountcontainer': {
          templateUrl: 'app/customer/customer-account-detail.html'
        }
      }
    }
  }
]);
