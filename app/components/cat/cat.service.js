"use strict";

angular
.module("cat")
    .factory("catService", function () {
        
        var currentCat = {};

        var cats = [
                    { id: 1, name: "Cat1", image: "img/cat1.png", click: false, votes: 115, number: 99 },
                    { id: 2, name: "Cat2", image: "img/cat2.jpg", click: false, votes: 93, number: 50 },
                    { id: 3, name: "Cat3", image: "img/cat3.jpg", click: false, votes: 75, number: 33 },
                    { id: 4, name: "Cat4", image: "img/cat4.jpg", click: false, votes: 134, number: 94 },
                    { id: 5, name: "Cat5", image: "img/cat5.jpg", click: false, votes: 50, number: 168 },
                    { id: 6, name: "Cat6", image: "img/cat3.jpg", click: false, votes: 96, number: 188 }
        ];
        
        return {

            addCat:function(newCat) {
                newCat.id = cats.length + 1;
                newCat.click = false;
                newCat.votes = 0;
                newCat.number = 0;
                cats.push(newCat);
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