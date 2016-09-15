'use strict';

angular.module("woldApp", ["ui.router", "supplier.controllers"])

.config(function ($stateProvider, $urlRouterProvider) {
    
$stateProvider

.state("suppliers", {
    url : "/suppliers",
    controller : "supplierController",
    templateUrl : "views/supplierList.html"
})
   
    
$urlRouterProvider.otherwise("/suppliers");
    
    
});