
  angular.module('HealthBuddyApp.controllers').controller('taxiController', function ($scope, healthService, $location, $routeParams) {
  $scope.list = [];

  $scope.init = function() {

    /*
    healthService.getTaxiList(parameters)
      .then(function (response) {
        var data = response.data;
        $scope.list = data;
      });
    */
    $scope.list = [
      {Name: 'Adelaide Suburban Taxi', PhoneNumber: "1800 333 888"},
      {Name: 'YellowCab', PhoneNumber: "1800 333 888"}
    ];
  };
});
