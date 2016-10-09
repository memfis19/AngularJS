(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['categories'];
function MenuAppController(categories) {
  var list = this;
  list.items = categories;

  list.openMenu = function (shortName) {
    var detailsPromise = MenuDataService.getItemsForCategory(shortName);
    detailsPromise.then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
  }
};

})();
