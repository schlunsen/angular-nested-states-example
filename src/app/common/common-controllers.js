
var app = angular.module('frontend');

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

  for (var i = 0; i < 1; i++) {
    $scope.boxes.push({
      color: $scope.colors[_.random(0, $scope.colors.length-1)]
    });
  }

  $scope.addBox = function(){
    $scope.boxes.push({
      color: $scope.colors[_.random(0, $scope.colors.length-1)]
    });
  }

  $scope.randomize = function(){

    $scope.boxes = _.map($scope.boxes, function(e){
      return {
        color: $scope.colors[_.random(0, $scope.colors.length-1)]
      }
    });



  }

  var interval = $interval(function(){
    $scope.randomize();
    $scope.addBox();
    if ($scope.boxes.length === 600) {
      $interval.cancel(interval);
    }
  }, 10)


})
;


