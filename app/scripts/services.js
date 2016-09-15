angular.module("supplier.services", [ "ngResource" ])

.factory("supplierService", [ "$resource", function($resource) {
   
    var API_URL = "https://api.mongolab.com/api/1/databases/wold-db/collections/";
    var SUPPLIER_COLLECTION_NAME = "suppliers/";
    
    var PARAM_NAME = ":supplier_id"
    
    var API_KEY = "BukQiekypWlPVFaHb06eg8m11T87l_Y3";
    
    var Supplier = $resource(API_URL + SUPPLIER_COLLECTION_NAME + PARAM_NAME + "?apiKey=" + API_KEY, { supplier_id : "@_id.$oid" }, {
        update : {
            method : "PUT"
        }
    });
    
    function getSuppliersList(){
        return Supplier.query().$promise;
    }
    
    function getSupplier(supplierId){
        return Supplier.get({
            supplier_id : supplierId}).$promise;
    }
    
    function updateSupplier(supplierObj){
        return Supplier.update(supplierObj).$promise;
    }
    
    function deleteSupplier(supplierObj){
        return Supplier.remove({ supplier_id : supplierObj._id.$oid}).$promise;
    }
    
    function saveSupplier(supplierObj){
        return Supplier.save(supplierObj).$promise;
    }
    
    function printSuccessMsg(className, successData) {
         console.log(">>>" + className + " successfully retrieved.");
            console.log(className + " retrieved: " + successData.length);
    }
    
    function printErrorMsg(className, errorData){
        console.log(">>>Error retrieving " + className + ".");
        console.log("message error: " + errorData.data.message);
        console.log("status error: " + errorData.status);
        console.log("request detail: " + errorData.config.method + " " + errorData.config.url + " " + errorData.config.headers);
        console.log("status text: " + errorData.statusText);
    }
    
    return {
        getSupplier : getSupplier,
        getSuppliersList : getSuppliersList,
        saveSupplier : saveSupplier,
        updateSupplier : updateSupplier,
        deleteSupplier : deleteSupplier,
        printSuccessMsg : printSuccessMsg,
        printErrorMsg : printErrorMsg
    }
    
}]);
