
  angular.module('HealthBuddyApp.controllers').controller('resultsController', function ($scope, healthService, $location, $routeParams) {
  $scope.list = [];

  $scope.init = function() {
    var parameters = {
      latitude: $routeParams.latitude,
      longitude: $routeParams.longitude,
      gender: $routeParams.gender,
      isChild: $routeParams.isChild
    };


    healthService.getFacilityList(parameters)
      .then(function (response) {
        var data = response.data.Facilities;
        $scope.list = data;
      });

    // $scope.list = [
    //   {facilityName: 'RAH'},
    //   {facilityName: 'Flinders'}
    // ];
  };

  $scope.navigate = function(facility, transportMethod) {

    if (transportMethod == "car" || transportMethod == "bus")
    {
      var sourceLatLong = $routeParams.latitude + "," + $routeParams.longitude;
      var destinationLatLong = facility.Location.Latitude + "," + facility.Location.Longitude;
      var url = "https://maps.google.com?saddr=" + sourceLatLong + "&daddr=" + destinationLatLong;
      location.href = url;
    }
    else {
      $location.url("/taxi");
    }

  }
});
