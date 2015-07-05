
  angular.module('HealthBuddyApp.controllers').controller('taxiController', function ($scope, healthService, $location, $routeParams) {
  $scope.list = [];

  $scope.init = function() {


    healthService.getTaxiList()
      .then(function (response) {
        var data = response.data;
        $scope.list = data.TaxiServices;
      });

  };
});
