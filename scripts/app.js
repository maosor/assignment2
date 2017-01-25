(function () {
'use strict';

var alreadyBought =[];

var toBuy = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {

  $scope.toBuy = toBuy;
  $scope.alreadyBought = alreadyBought;

  $scope.setBuy = function(item) {
    var index = $scope.toBuy.indexOf(item);
    $scope.toBuy.splice(index, 1);
    $scope.alreadyBought.push(item)
  }
}
})();
