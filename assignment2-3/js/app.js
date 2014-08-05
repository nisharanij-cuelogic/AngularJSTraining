'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'MyCtrl1'});
  $routeProvider.when('/about-us', {templateUrl: 'partials/aboutme.html', controller: 'MyCtrl1'});
  $routeProvider.when('/join-us', {templateUrl: 'partials/careers.html', controller: 'MyCtrl2'});
  $routeProvider.when('/cuelogic/clients', {templateUrl: 'partials/clients.html', controller: 'MyCtrl1'});
  $routeProvider.when('/terms-and-condition', {templateUrl: 'partials/toc.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: 'index'});
}]);