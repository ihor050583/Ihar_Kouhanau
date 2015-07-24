"use strict";

angular
    .module("cat")
    .controller("addCatController", addCatController);

function addCatController($scope, catService, $state, labelService, $filter) {

    $scope.availableLabels = labelService.getLabels();
    $scope.cat = {
        date: $filter('date')(Date.now(), "MM/dd/yyyy")
};

    $scope.opened = false;
    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    }

    $scope.cancel = function () {
        $state.go("cats");
    };

    $scope.save = function () {
        catService.addCat($scope.cat);
        $state.go("cats");
    };
}