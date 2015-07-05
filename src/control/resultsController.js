
  angular.module('HealthBuddyApp.controllers').controller('resultsController', function ($scope, healthService, $location, $routeParams) {
  $scope.list = [];
  $scope.sentiment = [];

  $scope.init = function() {
    var parameters = {
      latitude: $routeParams.latitude,
      longitude: $routeParams.longitude,
      gender: $routeParams.gender,
      isChild: $routeParams.isChild,
      facilityTypeCode: $routeParams.facilityTypeCode
    };

    if ($routeParams.demo == "yes")
    {
      healthService.Demo = true;
    }

    healthService.getFacilityList(parameters)
      .then(function (response) {
        var data = response.data.Facilities;
        $scope.list = data;
      });

  };
  $scope.getAveWaitTime = function(item)
  {
    return Math.floor(item.EmergencyDepartmentStatus.AvgWaitTimeMinsExclHigh);
  }

  $scope.toPercent = function(decimalValue)
  {
    return decimalValue * 100;
  };

  $scope.getCapacityPercent = function(item)
  {
    return Math.floor((item.EmergencyDepartmentStatus.CommencedTreatment / item.EmergencyDepartmentStatus.Capacity) * 100);
  }

  $scope.getCapacityIndicator = function(item)
  {
    var percent = $scope.getCapacityPercent(item);
    if (percent > 90) { return "red"; }
    if (percent > 70) { return "yellow"; }
    return "green";
  }


  $scope.navigate = function(facility, transportMethod) {

    if (transportMethod == "car" || transportMethod == "subway")
    {
      var sourceLatLong = $routeParams.latitude + "," + $routeParams.longitude;
      var destinationLatLong = facility.Location.Latitude + "," + facility.Location.Longitude;
      var url = "https://maps.google.com?saddr=" + sourceLatLong + "&daddr=" + destinationLatLong;
      location.href = url;
    }
    else if (transportMethod == "taxi") {
      $location.url("/taxi");
    }

  }
});
