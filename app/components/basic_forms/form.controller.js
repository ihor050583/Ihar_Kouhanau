"use strict";

angular
    .module("form")
 .controller("formController", formController);

function formController($scope) {
    $scope.submit = function () {
        alert("You are registered");
    };
   
}