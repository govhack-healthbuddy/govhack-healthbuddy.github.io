/*
 * Health Service - Retrieves list of ...
*/
angular.module('HealthBuddyApp.services').factory('healthService', function ($http) {

    var healthAPI = {};

    healthAPI.Url = 'http://localhost/HealthBuddy/RESTApi/HealthJsonService.svc';



    /*
     * Return a list of ....
     * Uses Http Web services.
     * Returns a Promise object.
     */
    healthAPI.getData = function () {
        return $http.get(healthAPI.Url);
    };

    healthAPI.add = function (health) {
        return $http({
            method: "POST",
            url: healthAPI.Url + "/add",
            data: health
        });
    }

    healthAPI.update = function (health) {
        return $http({
            method: "POST",
            url: healthAPI.Url + "/update",
            data: health
        });
    }

    healthAPI.delete = function (health) {
        return $http({
            method: "POST",
            url: healthAPI.Url + "/delete",
            data: health
        });
    }

    /* Returns object. */
    return healthAPI;
  });
