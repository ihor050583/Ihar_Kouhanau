"use strict";

angular
    .module("cat")
    .controller("catController", catController);

function catController($scope, catService, $filter, $state) {

    $scope.click = function (cat) {
        catService.click(cat.id);
        $scope.currentCat = cat;
    }


    $scope.gridOptions = {
        showFooter: false,
        enableSorting: true,
        multiSelect: false,
        enableFiltering: true,
        enableRowSelection: true,
        enableSelectAll: false,
        enableRowHeaderSelection: false,
        noUnselect: true,
        rowTemplate: "<div ng-click=\"grid.appScope.click(row.entity)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>",
        columnDefs: [
          { name: 'Name', field: 'name' },
          { name: 'Votes', field: 'votes', enableFiltering: false, enableSorting: false },
          { name: 'Clicks', field: 'number', enableFiltering: false, enableSorting: false },
           {
               name: 'Created', field: 'date', enableFiltering: false, enableSorting: false,
               cellTemplate: '<span>{{row.entity.date | date:"MM/dd/yyyy" }}</span>'
           },
           {
               name: 'Labels', field: 'labels', enableFiltering: false, enableSorting: false,
               cellTemplate: '<span ng-repeat="label in row.entity.labels">{{label}} </span>'
           },
            {
                field: 'click', enableFiltering: false, enableSorting: false,
                cellTemplate: '<img class="sign" ng-if="row.entity.click" src="img/download.png"/>'
            }
           
        ],
        data: catService.getCats()
    };

};