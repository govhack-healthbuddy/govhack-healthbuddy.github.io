
  angular.module('HealthBuddyApp.controllers').controller('resultsController', function ($scope, healthService, $location, $routeParams) {
  $scope.list = [];

  $scope.init = function() {
    var parameters = {
      latitude: $routeParams.latitude,
      longitude: $routeParams.longitude,
      gender: $routeParams.gender,
      isChild: $routeParams.isChild
    };

    /*
    healthService.getFacilityList(parameters)
      .then(function (response) {
        var data = response.data;
        $scope.list = data;
      });
    */
    $scope.list = [
      {facilityName: 'RAH'},
      {facilityName: 'Flinders'}
    ];
  };
});
