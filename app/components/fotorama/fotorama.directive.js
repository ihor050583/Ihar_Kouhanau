"use strict";

angular
    .module("fotorama")
    .directive("fotoramaWrapper", function () {
        return {
            link: function (scope, element, attributes) {
                var $fotoramaDiv = $('.fotorama').fotorama();
                var fotorama = $fotoramaDiv.data('fotorama');

                var data = scope[attributes["images"]];
                var activeIndex = attributes["activeIndex"];
               
                fotorama.load(data);
                fotorama.show(activeIndex);
            },
            restrict: "E",
            scope: true,
            template: "<div class='fotorama'></div>"
        }
    });
