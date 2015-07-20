"use strict";

angular
    .module("cat")
    .filter('catSearch', function () {

    return function (arr, searchString) {

        if (!searchString) {
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function (item) {

            if (item.name.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }

        });

        return result;
    };
});