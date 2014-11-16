
var app = angular.module('nestedStatesExample');

app.controller('HeaderCtrl', function ($scope, $state) {

});

app.controller('FooterCtrl', function ($scope) {

});

app.controller('AboutCtrl', function ($scope) {

});

app.controller('BoxViewCtrl', function ($scope, $timeout, $interval) {
  $scope.boxes = [];
  $scope.colors = ['red', 'yellow', 'blue', 'pink', 'green', 'purple'];


  $scope.numOfBoxes = 100;




  $scope.addBox = function(){
    $scope.boxes.push({
      color: $scope.colors[_.random(0, $scope.colors.length-1)],
      colorClass: $scope.colorClasses[_.random(0, $scope.colorClasses.length-1)]
    });
  }

  $scope.restart = function(){
    $interval.cancel($scope.interval);
    $scope.boxes = [];
    $scope.colorClasses = [];
    for (var i = 0; i < $scope.numOfBoxes; i++) {
      $scope.colorClasses.push('color-class-'+i);
    }
    for (var i = 0; i < $scope.numOfBoxes; i++) {
      $scope.boxes.push({
        color: $scope.colors[_.random(0, $scope.colors.length-1)],
        colorClass: $scope.colorClasses[_.random(0, $scope.colorClasses.length-1)]
      });
    }

    $scope.interval = $interval(function(){
      //$scope.randomize();
      $scope.addBox();

    }, 10)

  }
  $scope.clear = function(){
    $interval.cancel($scope.interval);
    $scope.boxes = [];
  }

  $scope.randomize = function(){

    $scope.boxes = _.map($scope.boxes, function(e){
      return {
        color: $scope.colors[_.random(0, $scope.colors.length-1)],
        colorClass: $scope.colorClasses[_.random(0, $scope.colorClasses.length-1)]
      }
    });

  }

  $scope.restart();






})
;


