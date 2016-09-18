(function () {
  'use strict';
  angular.module('LunchCalculator', [])
  .controller('LunchCalculatorController', function($scope) {
    $scope.lunchList = "";
    $scope.lunchListCount = 0;
    $scope.message = "";
  });
})()
