(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/items.template.html',
  controller: ItemsComponentController,
  bindings: {
    items: '<'
  }
});

ItemsComponentController.$inject = ['$rootScope', '$element', '$q']
function ItemsComponentController($rootScope, $element, $q) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
  };


  $ctrl.$doCheck = function () {
  };

  $ctrl.click = function (sn) {
    $ctrl.onClick({ shortName: sn });
  };
};

})();
