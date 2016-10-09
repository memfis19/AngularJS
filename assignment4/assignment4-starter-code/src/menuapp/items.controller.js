(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  var list = this;
  list.items = items;

  list.$onInit = function (){
    console.log("ItemsController");
  };
};

})();
