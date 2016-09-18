(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchList = "";
  $scope.message = "";
  $scope.messageColor = "";

  $scope.processLunchList = function () {
    if ($scope.lunchList == "") {
      $scope.message = "Please enter data first";
      $scope.messageColor = getColor(0);
      return;
    }

    var sizeOfLunch = calculateLunch($scope.lunchList);
    $scope.messageColor = getColor(sizeOfLunch);

    if (sizeOfLunch <= 0) $scope.message = "Please enter data first";
    if (sizeOfLunch > 0 && sizeOfLunch <= 3) $scope.message = "Enjoy!";
    if (sizeOfLunch > 3) $scope.message = "Too much!";
  }

  function calculateLunch(string) {
    var listOfLunch = string.split(',');
    return listOfLunch.length;
  }

  function getColor(sizeOfLunch) {
    var colorValue = "green";
    if (sizeOfLunch <= 0) colorValue = "red";
    return {color: colorValue};
  }

}

})()
