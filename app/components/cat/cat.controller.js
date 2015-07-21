"use strict";

angular
    .module("cat")
    .controller("catController", catController);

function catController($scope, catService, $filter, $state) {

    $scope.click = function (catId) {
        catService.click(catId);
        $scope.currentCat = catService.getCurrentCat();
    }

    $scope.sortOrder = false;
    $scope.cats = catService.getCats();

};