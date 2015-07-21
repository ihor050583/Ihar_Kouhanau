"use strict";

angular
    .module("cat")
    .controller("catController", catController);

function catController($scope, catService, $filter, $state) {

    $scope.click = function (cat) {
        catService.click(cat.id);
        $scope.currentCat = cat;
    }

    $scope.sortOrder = false;
    $scope.cats = catService.getCats();

};