'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
       $scope.message="Hello World";
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('HeaderController', function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
   });
  