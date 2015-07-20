"use strict";

angular
    .module("charts")
 .controller("chartsController", chartsController);

function chartsController($scope, catService) {

    $scope.cats = catService.getCats();
}