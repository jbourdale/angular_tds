contactApp.controller("contactCtrl", ['$http', function($http){

    var self = this;

    this.result;
    this.indiceContactModifier = -1;
    this.contacts = [];
    this.contact = {};
    this.tmpContact = {
        "nom":"",
        "prenom":"",
        "email":"",
        "deleted":"0"
    };
    /*
        Operation :
            0 : not set
            1 : Modification
            2 : Ajout contact
     */
    this.operation=0;

    /* GETTING ASSETS/CONTACT.JSON CONTENT */
    $http.get('../assets/contacts.json').then(function(response){
        self.contacts = response.data;
        console.log("JSON : "+JSON.stringify(self.contacts));
    }, function(){
        console.log("Erreur");
    });
    /* END */


    this.toUpdate = function(contact){
        self.indiceContactModifier = self.contacts.indexOf(contact);
        self.tmpContact = angular.copy(contact);
        self.operation = 1;
    };

    this.toAdd = function(){
        self.operation = 2;
    };

    this.add = function(){
        if(self.operation == 2) {
            self.contacts.push(self.tmpContact);
        }
        self.tmpContact = {
            "nom":"",
            "prenom":"",
            "email":""
        };
        self.operation = 0;
    };

    this.update = function(){
        self.contacts[self.indiceContactModifier] = angular.copy(self.tmpContact);

        self.tmpContact = {};
        self.operation = 0;
    };

    this.delete = function(contact){
        contact.deleted = 1;
    };

    this.undelete = function(){
        for(i in self.contacts){
            self.contacts[i].deleted = "0";
        }
    };

}]);