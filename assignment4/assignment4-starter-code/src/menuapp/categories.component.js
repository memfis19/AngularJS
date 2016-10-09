(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/categories.template.html',
  controller: CategoriesComponentController,
  bindings: {
    items: '<'
  }
});

CategoriesComponentController.$inject = ['$rootScope', '$element', '$q']
function CategoriesComponentController($rootScope, $element, $q) {
  var $ctrl = this;
  var totalItems;

  $ctrl.$onInit = function () {
    totalItems = 0;
  };


  $ctrl.$doCheck = function () {
  };
};

})();
