(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller("ToBuyShoppingController", ToBuyShoppingController)
  .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
  var itemBuyer = this;

  itemBuyer.items = ShoppingListCheckOffService.getShoppingList();

  itemBuyer.buyItem = function  (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

  itemBuyer.isEmpty = function () {
    return itemBuyer.items.length == 0;
  };
}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

  boughtList.isEmpty = function () {
    return boughtList.items.length == 0;
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  var shoppingList = [
    {
      name : "Milk",
      quantity : "15"
    },
    {
      name : "Donuts",
      quantity : "70"
    },
    {
      name : "Chocolate",
      quantity : "17"
    },
    {
      name : "Tea",
      quantity : "10"
    },
    {
      name  : "Cookies",
      quantity : "100"
    }
  ];
  var boughtList = [];

  service.buyItem = function (itemIndex) {
    var boughtItem = shoppingList[itemIndex];
    shoppingList.splice(itemIndex, 1);
    boughtList.push(boughtItem);
  };

  service.getBoughtItems = function () {
    return boughtList;
  };

  service.getShoppingList = function () {
    return shoppingList;
  };

}

})()
