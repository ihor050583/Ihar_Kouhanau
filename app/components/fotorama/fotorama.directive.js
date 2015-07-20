"use strict";

angular
    .module("fotorama")
    .directive("fotoramaWrapper", function () {
        return {
            link: function (scope, element, attributes) {

                var data = scope[attributes["images"]];

                if (angular.isArray(data)) {
                    var $fotoramaDiv = $('.fotorama').fotorama();
                    var fotorama = $fotoramaDiv.data('fotorama');

                    var activeIndex = attributes["activeIndex"];

                    fotorama.load(data);
                    fotorama.show(activeIndex);
                } else {
                    alert("undefined images data source for fotorama");
                };
            },
            restrict: "E",
            scope: true,
            template: "<div class='fotorama'></div>"
        }
    });
