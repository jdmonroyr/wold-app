angular.module("supplier.controllers", ["supplier.services"]).controller("supplierController", ["$scope", "supplierService", function ($scope, supplierService){
    
    var init = function () {
          getSuppliersList();
      };

      init();
    
    function getSuppliersList(){
        supplierService.getSuppliersList().then(function(successData){
            supplierService.printSuccessMsg("suppliers", successData);
            $scope.suppliers = successData;
        }, function (errorResult) {
            supplierService.printErrorMsg("suppliers", errorResult);
        });   
    }
    
    function getSupplier(supplierId) {
        var supplierId = supplierId;
      supplierService.getSupplier(supplierId).then(function(fetchedSupplier){
            console.log("Supplier fetched: " + fetchedSupplier.fullName);
        }, function (errorResult){
            console.log("Error getting supplier: " + errorResult.message);
        });
    }
    
    function saveSupplier () {
        var newSupplier = { 
                "ident" : "234234234234-9", 
                "fullName" : "Distribuidora del Sur S.A. " + Math.floor((Math.random() * 100) + 1), 
                "mainEmail" : "soporte@dist.co", 
                "mainPhoneNumber" : "+573145679840", 
                "mainAddress" : "Cra 3A no 24-67", 
                "contactName" : "Juan Monroy", 
                "secondaryEmail" : "jdm@gmail.com", 
                "secondaryPhoneNumber" : "+573149039856", 
                "secondaryAddress" : "NA" 
            };
        
                    supplierService.saveSupplier(newSupplier).then(function(savedSupplier){
            console.log("Saved supplier: " + savedSupplier);
            $scope.suppliers.push(savedSupplier);
        }, function (errorResult){
            console.log("Error saving supplier: " + errorResult.message);
        })
    }
    
    function updateSupplier () {
        var updatedSupplier = $scope.suppliers[0];
        updatedSupplier.fullName = "UpdatedName";
        supplierService.updateSupplier(updatedSupplier).then(function(updatedSupplier){
            $scope.suppliers[0] = updatedSupplier;
            console.log("Updated supplier: " + updatedSupplier);
        }, function (errorResult) {
            console.log("Error: " + errorResult);
        })
    }
    
    function deleteSupplier () {
        var supplierToDelete = $scope.suppliers[0];
        console.log("Id of object to delete: " + supplierToDelete._id.$oid);
 supplierService.deleteSupplier(supplierToDelete).then(function(deletedSupplier){
            console.log("Deleted supplier: " + deletedSupplier);
        }, function (errorResult){
            console.log("Error " + errorResult);
        })
    }
    
    
    
    
}]);