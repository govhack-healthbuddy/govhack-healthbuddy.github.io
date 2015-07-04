/*
 * Health Service - Retrieves list of ...
*/
angular.module('HealthBuddyApp.services').factory('healthService', function ($http) {

    var healthAPI = {};

    healthAPI.Url = 'http://healthbuddy-api-govhack.azurewebsites.net/api/Facility';

    healthAPI.getFacilityList = function (parameters) {
        return $http({
            method: "GET",
            url: healthAPI.Url + "?latitude=" + parameters.latitude + "&longitude=" + parameters.longitude + "&gender=" + parameters.gender + "&isChild=" + parameters.isChild + "&type=" + parameters.facilityTypeCode
        });
    }

    /* Returns object. */
    return healthAPI;
  });
