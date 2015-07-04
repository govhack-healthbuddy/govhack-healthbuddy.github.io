
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

  $scope.navigateNext = function(facilityTypeCode) {

    var parameters = {
      position: $scope.position,
      facilityTypeCode: facilityTypeCode,
      gender: 'M',
      age: 'Adult'
    };

    $location.url("/results/" + facilityTypeCode + "/" + $scope.position.coords.latitude +
      "/" + $scope.position.coords.longitude +
      "/M/false");
    //$location.url("/results/ed/0/0/M/false");
  }

});
