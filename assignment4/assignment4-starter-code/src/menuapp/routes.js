(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/template/home.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/template/categories.html',
    controller: 'MenuAppController as list',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/template/items.html',
    controller: 'ItemsController as list',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
        console.log($stateParams.shortName);
        return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  });
}

})();
