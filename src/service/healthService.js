/*
 * Health Service - Retrieves list of ...
*/
angular.module('HealthBuddyApp.services').factory('healthService', function ($http) {

    var healthAPI = {};

    healthAPI.Url = 'http://healthbuddy-api-govhack.azurewebsites.net/api/facility/';

    healthAPI.getFacilityList = function (parameters) {
        return $http({
            method: "GET",
            url: healthAPI.Url,
            data: parameters
        });
    }

    /* Returns object. */
    return healthAPI;
  });
