
  angular.module('HealthBuddyApp.controllers').controller('demoController', function ($scope, healthService, $location) {

  $scope.init = function() {
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            $scope.$apply(function(){
                 $scope.position = position;
               });
          });
    }

  };

  $scope.navigateNext = function() {
    $location.url("/results/");
  }

});
