(function () {
  'use strict';
  angular.module('NarrowItDownApp', [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .directive("foundItems", FoundItemsDirective)
  .directive("itemsLoaderIndicator", ItemsLoaderIndicatorDirective);

function ItemsLoaderIndicatorDirective() {
  var ddo = {
      templateUrl: "loader/itemsloaderindicator.template.html"
  };
  return ddo;
}

function FoundItemsDirective() {
  var ddo = {
      restrict: 'AE',
      templateUrl: "template/narrowList.html",
      scope: {
        items: '<found',
        onRemove: '&'
      }
  };
  return ddo;
}

MenuSearchService.$inject = ['$http']
NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService) {
  var narrower = this;
  narrower.found = [];
  narrower.loading = false;
  narrower.isEmptyList = false;
  narrower.searchTerm = "";

  narrower.foundItems = function () {

    narrower.isEmptyList = false;
    narrower.loading = true;

    if (narrower.searchTerm == "") {
      narrower.loading = false;
      narrower.isEmptyList = true;
      narrower.found = [];
      narrower.searchTerm = "";
      return;
    }

    var promise = MenuSearchService.getMatchedMenuItems(narrower.searchTerm);
    promise.then(function (response) {
      narrower.loading = false;
      narrower.found = response;

      if (narrower.found.length == 0) {
        narrower.isEmptyList = true;
      }
    })
    .catch(function(error) {
      console.log("Something goes wrong.");
    })
  };

  narrower.isEmpty = function () {
    return narrower.isEmptyList;
  };

  narrower.removeItem = function (itemIndex) {
    narrower.found.splice(itemIndex, 1);
  };
}

function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (response) {
      var result = response.data.menu_items;
      var foundItems = [];

      for (var i = 0; i < result.length; i++) {
        var description = result[i].description.toLowerCase();
        if (description.indexOf(searchTerm.toLowerCase()) !== -1) {
          foundItems.push(result[i]);
        }
      }
      return foundItems;
    })
    return response;
  };

}

})()
