"use strict";

angular
    .module("cat")
    .directive("catsChart", function () {
        return {
            link: createChart,
            restrict: "E",
            scope: true
        }
    });

function createChart(scope, element, attributes) {
    var dataset = scope[attributes["ngModel"]];
    var prop = attributes["property"];


    var width = attributes["width"] ? attributes["width"] : 500;
    var height = attributes["height"] ? attributes["height"] : 200;
    var barPadding = attributes["barPadding"] ? attributes["barPadding"] : 1;

    var svg = d3.select(element[0])
        .append("svg")
        .style('width', width)
        .attr("height", height);

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
            return i * (width / dataset.length);
        })
        .attr("y", function (d) {
            return height - d[prop];
        })
        .attr("width", width / dataset.length - barPadding)
        .attr("height", function (d) {
            return d[prop];
        })
        .attr("fill", function (d) {
            return "rgb(0, 0, " + d[prop] + ")";
        });


    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d) {
            return d.name+" ("+ d[prop]+")";
        })
        .attr("x", function (d, i) {
            return i * (width / dataset.length);
        })
        .attr("y", function (d) {
            return height - (d[prop]) + 14;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white");


}