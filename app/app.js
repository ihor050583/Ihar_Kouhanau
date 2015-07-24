'use strict';

angular.module('myApp', ['ui.router', 'cat', 'charts', 'fotorama', 'ui.grid', 'ui.grid.selection', 'ui.bootstrap', 'ui.select'])
.config(Config);


function Config($stateProvider, $urlRouterProvider) {
    //route settings
    $urlRouterProvider.otherwise("/cats");

    $stateProvider
        .state("addCat",
        {
            url: "/cat",
            templateUrl: "components/cat/addCat/addCat.html",
            controller: "addCatController"
        })
        .state("cats",
            {
                url: "/cats",
                templateUrl: "components/cat/cats.html",
                controller: "catController"
            })
    .state("charts",
            {
                url: "/charts",
                templateUrl: "components/charts/charts.html",
                controller: "chartsController"
            })
    .state("fotorama",
            {
                url: "/fotorama",
                templateUrl: "components/fotorama/fotorama.html",
                controller: "fotoramaController"
            });


};

