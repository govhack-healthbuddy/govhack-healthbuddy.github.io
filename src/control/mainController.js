
  angular.module('HealthBuddyApp.controllers').controller('mainController', function ($scope, healthService, $location) {
  $scope.Context = [];

  $scope.init = function() {
  };

  $scope.navigateNext = function() {
    $location.url("/demo/");
  }

});
