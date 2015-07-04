
  angular.module('HealthBuddyApp.controllers').controller('navigateController', function ($scope, healthService, $location, $routeParams) {
  $scope.list = [];

  $scope.init = function() {
    var parameters = {
      latitude: $routeParams.latitude,
      longitude: $routeParams.longitude,
      gender: $routeParams.gender,
      isChild: $routeParams.isChild,
      facilityTypeCode: $routeParams.facilityTypeCode
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
