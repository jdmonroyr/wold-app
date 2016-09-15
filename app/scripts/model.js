'use strict';

/* Model classes for application */

/* Supplier Entity --add behaviour when needed...*/

angular.module('app')
    .factory('Supplier', function () {
    
        function Supplier(args) {
            this.id = args.id;
            this.fullname = args.fullname;
            this.mainEmail = args.mainEmail;
            this.mainPhoneNumber = args.mainPhoneNumber;
            this.mainAddress = args.mainAddress;
            this.contactName = args.contactName;
            this.secondaryEmail = args.secondaryEmail;
            this.secondaryPhoneNumber = args.secondaryPhoneNumber;
            this.secondaryAddress = args.secondaryAddress;

        }
        return Supplier;
});