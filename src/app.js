angular.module('HealthBuddyApp', [
  'HealthBuddyApp.controllers',
  'HealthBuddyApp.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when("/home", { templateUrl: "main.html", controller: "mainController" }).
      when("/demo", { templateUrl: "demo.html", controller: "demoController" }).
      when("/results/:latitude/:longitude/:gender/:isChild", { templateUrl: "results.html", controller: "resultsController" }).
      otherwise({ redirectTo: '/home' });
}]);

angular.module('HealthBuddyApp.controllers', []);

angular.module('HealthBuddyApp.services', []);
