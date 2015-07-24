"use strict";

angular
.module("cat")
    .service("labelService", function () {

        var labels = ["red", "orange", "yellow", "green", "blue", "black", "white", "gray", "brown", "cat", "fish", "nature"];
        return {
            getLabels: function () {
                return labels;
            },
            addLabels: function (array) {

                if (angular.isArray(array)) {
                   labels = _.union(labels, array);
                }
            }
        };
    })
    .factory("catService", function (labelService) {

        var currentCat = {};

        var cats = [
                    { id: 1, name: "Cat1", image: "img/cat1.png", click: false, votes: 115, number: 99, date: Date.now(), labels: ["brown", "cat"] },
                    { id: 2, name: "Cat2", image: "img/cat2.jpg", click: false, votes: 93, number: 50, date: Date.now(), labels: ["yellow", "cat", "fish"] },
                    { id: 3, name: "Cat3", image: "img/cat3.jpg", click: false, votes: 75, number: 33, date: Date.now(), labels: ["white", "cat", "nature"] },
                    { id: 4, name: "Cat4", image: "img/cat4.jpg", click: false, votes: 134, number: 94, date: Date.now(), labels: ["black", "cat"] },
                    { id: 5, name: "Cat5", image: "img/cat5.jpg", click: false, votes: 50, number: 168, date: Date.now(), labels: ["brown", "cat"] },
                    { id: 6, name: "Cat6", image: "img/cat3.jpg", click: false, votes: 96, number: 188, date: Date.now(), labels: ["gray", "cat"] }
        ];

        

        return {

            addCat: function (newCat) {
                newCat.id = cats.length + 1;
                newCat.click = false;
                newCat.votes = 0;
                newCat.number = 0;
                cats.push(newCat);
                labelService.addLabels(newCat.labels);
            },

            getCats: function () {
                return cats;
            },

            getCurrentCat: function () {
                return currentCat;
            },

            changeCat: function (cat) {
                if (cat) {
                    var item = cats.filter(function (item) {
                        return item.id === cat.id;
                    })[0];
                    item.votes = cat.votes;
                }

            },

            click: function (catId) {
                cats.forEach(function (cat, i, arr) {
                    if (cat.id === catId) {
                        cat.click = true;
                        cat.number++;
                        currentCat = cat;
                    }
                });
            }
        };
    });