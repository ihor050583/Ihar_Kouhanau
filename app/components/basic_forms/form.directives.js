"use strict";

angular
    .module("form")
    .directive("confirmPassword", function () {
        return {
        require: "ngModel",
        scope: {
            value: "=confirmPassword"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.match = function(modelValue) {
                return modelValue == scope.value;
            };
 
            scope.$watch("value", function() {
                ngModel.$validate();
            });
        }
    };
    });
