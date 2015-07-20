"use strict";

angular
    .module("cat")
    .controller("addCatController", addCatController);

function addCatController($scope, catService, $state) {

    $scope.cancel = function () {
        $state.go("cats");
    };

    $scope.save = function () {
        catService.addCat($scope.cat);
        $state.go("cats");
    };
}