/*
 * Health Service - Retrieves list of ...
*/
angular.module('HealthBuddyApp.services').factory('healthService', function ($http, $q, $timeout) {

    var healthAPI = {};

    healthAPI.Url = 'http://healthbuddy-api-govhack.azurewebsites.net/api/Facility';

    healthAPI.TaxiUrl = 'http://healthbuddy-api-govhack.azurewebsites.net/api/Taxi';

    healthAPI.Demo = false;

    healthAPI.SampleFacilities = '{"data": {"Facilities":[{"TravelTimes":[{"Mode":"Driving","Days":0,"Hours":0,"Minutes":4,"Seconds":24,"TransitDepartureTime":null,"TransitDepartureStop":null,"TransitArrivalTime":null,"TransitArrivalStop":null,"TransitRoute":null,"TransitRouteDescription":null},    {"Mode":"Transit","Days":0,"Hours":0,"Minutes":12,"Seconds":1,"TransitDepartureTime":"11:52am","TransitDepartureStop":"Stop G1 Wakefield St - North side","TransitArrivalTime":"11:56am","TransitArrivalStop":"Stop I1 Wakefield St - North side","TransitRoute":"172","TransitRouteDescription":"Kingswood to City"}],"Location":{"Latitude":"-34.927689","Longitude":"138.611154","Suburb":"Adelaide","Postcode":"5000","Address":"300 Wakefield Street"},"Name":"DEMO Calvary Wakefield Hospital","Description":null,"LessThan4HrsPct":null,"TwitterSentiment":0,"EmergencyDepartmentStatus":null,"OpenNow":"true","ClosingTime":null},{"TravelTimes":[{"Mode":"Driving","Days":0,"Hours":0,"Minutes":3,"Seconds":44,"TransitDepartureTime":null,"TransitDepartureStop":null,"TransitArrivalTime":null,"TransitArrivalStop":null,"TransitRoute":null,"TransitRouteDescription":null},{"Mode":"Transit","Days":0,"Hours":0,"Minutes":16,"Seconds":28,"TransitDepartureTime":null,"TransitDepartureStop":null,"TransitArrivalTime":null,"TransitArrivalStop":null,"TransitRoute":null,"TransitRouteDescription":null}],"Location":{"Latitude":"-34.941936","Longitude":"138.606952","Suburb":"Parkside","Postcode":"5063","Address":"7 Unley Road"},    "Name":"Parkside Cosmetic Surgery","Description":null,"LessThan4HrsPct":null,"TwitterSentiment":0,"EmergencyDepartmentStatus":null,"OpenNow":"true","ClosingTime":null},{"TravelTimes":[{"Mode":"Driving","Days":0,"Hours":0,"Minutes":3,"Seconds":29,"TransitDepartureTime":null,"TransitDepartureStop":null,"TransitArrivalTime":null,"TransitArrivalStop":null,"TransitRoute":null,"TransitRouteDescription":null},{"Mode":"Transit","Days":0,"Hours":0,"Minutes":11,"Seconds":46,"TransitDepartureTime":"11:55am","TransitDepartureStop":"Stop H1 Halifax St - North side","TransitArrivalTime":"11:57am","TransitArrivalStop":"Stop I1 Halifax St - North side","TransitRoute":"98A","TransitRouteDescription":"City & North Adelaide anti-clockwise loop"}],"Location":{"Latitude":"-34.934224","Longitude":"138.614963","Suburb":"Adelaide","Postcode":"5000","Address":"350 South Terrace"},"Name":"St Andrew\'s Hospital","Description":null,"LessThan4HrsPct":null,"TwitterSentiment":0,"EmergencyDepartmentStatus":null,"OpenNow":"true","ClosingTime":null},{"TravelTimes":[{"Mode":"Driving","Days":0,"Hours":0,"Minutes":4,"Seconds":59,"TransitDepartureTime":null,"TransitDepartureStop":null,"TransitArrivalTime":null,"TransitArrivalStop":null,"TransitRoute":null,"TransitRouteDescription":null},{"Mode":"Transit","Days":0,"Hours":0,"Minutes":12,"Seconds":42,"TransitDepartureTime":"11:55am","TransitDepartureStop":"Stop H1 Halifax St - North side","TransitArrivalTime":"11:59am","TransitArrivalStop":"Stop T1 Hutt St - West side","TransitRoute":"98A","TransitRouteDescription":"City & North Adelaide anti-clockwise loop"}],"Location":{"Latitude":"-34.928514","Longitude":"138.614276","Suburb":"Adelaide","Postcode":"5000","Address":"137 East Terrace"},"Name":"Parkwynd Private Hospital","Description":null,"LessThan4HrsPct":null,"TwitterSentiment":0,"EmergencyDepartmentStatus":null,"OpenNow":"true","ClosingTime":null},{"TravelTimes":[{"Mode":"Driving","Days":0,"Hours":0,"Minutes":7,"Seconds":59,"TransitDepartureTime":null,"TransitDepartureStop":null,"TransitArrivalTime":null,"TransitArrivalStop":null,"TransitRoute":null,"TransitRouteDescription":null},{"Mode":"Transit","Days":0,"Hours":0,"Minutes":16,"Seconds":54,"TransitDepartureTime":"11:55am","TransitDepartureStop":"Stop H1 Halifax St - North side","TransitArrivalTime":"12:05pm","TransitArrivalStop":"Stop R2 North Tce - South side","TransitRoute":"98A","TransitRouteDescription":"City & North Adelaide anti-clockwise loop"}],"Location":{"Latitude":"-34.920308","Longitude":"138.608944","Suburb":"Adelaide","Postcode":"5000","Address":"North Terrace"},"Name":"Royal Adelaide Hospital","Description":null,"LessThan4HrsPct":0.495,"TwitterSentiment":0,"EmergencyDepartmentStatus":{"ExpectedArrivals":2,"Waiting":1,"CommencedTreatment":55,"Capacity":59,"AvgWaitTimeMinsExclHigh":10.29},"OpenNow":"true","ClosingTime":null}],"Origin":{"Latitude":"-34.932829399999996","Longitude":"138.6038129","Suburb":"Adelaide","Postcode":"5000","Address":"91 Halifax Street"}}}';

    healthAPI.SampleTaxies = '{"data": {"TaxiServices":[{"Name":"DEMO Gawler Taxi & Hire Car Service","Phone":"08 8523 1366","Services":"Taxis24 seater bus available"},{"Name":"Strathalbyn Taxis","Phone":"0466 111 133","Services":"Mini buses for functions & taxisAirport transfers"},{"Name":"Adelaide Access Taxis","Phone":"1300 360 940","Services":"Taxi transport for people with physical disabilities Single wheelchair taxis and Commuter Buses, able to fit 2 or 3 wheelchairs and carry up to 11 passengersDrivers with additional training to increa"}]}}';

    healthAPI.getFacilityList = function (parameters) {
        if (healthAPI.Demo)
        {
          var defer =  $q.defer();

          $timeout(function() {
               defer.resolve(JSON.parse(healthAPI.SampleFacilities));
             }, 2000);
          return defer.promise;
        }

        return $http({
            method: "GET",
            url: healthAPI.Url + "?latitude=" + parameters.latitude + "&longitude=" + parameters.longitude + "&gender=" + parameters.gender + "&isChild=" + parameters.isChild + "&type=" + parameters.facilityTypeCode
        });
    };

    healthAPI.getTaxiList = function () {
      if (healthAPI.Demo)
      {
        var defer =  $q.defer();

        $timeout(function() {
             defer.resolve(JSON.parse(healthAPI.SampleTaxies));
           }, 2000);
        return defer.promise;
      }

        return $http({
            method: "GET",
            url: healthAPI.TaxiUrl
        });
    };

    /* Returns object. */
    return healthAPI;
  });
