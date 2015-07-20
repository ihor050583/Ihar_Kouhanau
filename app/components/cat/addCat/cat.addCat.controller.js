"use strict";

angular
    .module("cat")
    .controller("addCatController", addCatController);

function addCatController($scope, catService, $state) {

    $scope.cancel = function () {
        $state.go("cats");
    };

    $scope.submitted = false;

    $scope.save = function (form) {

        $scope.submitted = true;

        if (form.$invalid) {
            return;
        }
        var newCat = {
            'name': form.name.$modelValue,
            'image': form.image.$modelValue
        }
        catService.addCat(newCat);
        $state.go("cats");
    };




}