angular.module('HealthBuddyApp', [
  'HealthBuddyApp.controllers',
  'HealthBuddyApp.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when("/home", { templateUrl: "main.html", controller: "mainController" }).
      when("/demo", { templateUrl: "demo.html", controller: "demoController" }).
      when("/demo2", { templateUrl: "demo2.html", controller: "demoController" }).
      when("/demo3", { templateUrl: "demo3.html", controller: "demoController" }).
      when("/results/:facilityTypeCode/:latitude/:longitude/:gender/:isChild", { templateUrl: "results.html", controller: "resultsController" }).
      when("/taxi/", { templateUrl: "taxi.html", controller: "taxiController" }).
      otherwise({ redirectTo: '/home' });
}]);

angular.module('HealthBuddyApp.controllers', []);

angular.module('HealthBuddyApp.services', []);
