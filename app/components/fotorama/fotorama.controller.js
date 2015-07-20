"use strict";

angular
    .module("fotorama")
 .controller("fotoramaController", fotoramaController);

function fotoramaController($scope) {

    $scope.data = [
  { img: '/app/img/cat5.jpg'},
  { img: '/app/img/cat4.jpg'},
  { img: '/app/img/cat2.jpg'},
  { img: '/app/img/cat3.jpg'},
  { img: '/app/img/cat1.png'}
    ];

}