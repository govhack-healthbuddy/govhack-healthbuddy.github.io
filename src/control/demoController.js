
  angular.module('HealthBuddyApp.controllers').controller('demoController', function ($scope, healthService, $location) {

  $scope.gender = 'M';
  $scope.isChild = false;

  $scope.init = function() {
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            $scope.$apply(function(){
                 $scope.position = position;
               });
          });
    }

  };

  $scope.doShowChoose = false;

  $scope.setGender = function(gender) {
    $scope.gender = gender;
  };

  $scope.setIsChild = function(isChild) {
    $scope.isChild = isChild;
  };;

  $scope.setShowChoose = function () {
    $scope.doShowChoose = true;
  };

  $scope.navigateNext = function(facilityTypeCode) {

    var parameters = {
      position: $scope.position,
      facilityTypeCode: facilityTypeCode,
      gender: $scope.gender,
      isChild: $scope.isChild
    };

    $location.url(
      "/results/" +
      $scope.position.coords.latitude + "/" +
      $scope.position.coords.longitude + "/" +
      $scope.gender + "/" +
      $scope.isChild + "/" +
      facilityTypeCode
    );

  }

});
