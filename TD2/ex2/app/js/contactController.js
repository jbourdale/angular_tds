contactApp.controller("contactCtrl", ['$http', function($http){

    var self = this;

    this.contacts = [];
    this.contact = {};
    this.tmpContact = {
        "nom":"",
        "prenom":"",
        "email":""
    };
    /*
        Operation :
            0 : not set
            1 : Modification
            2 : Ajout contact
     */
    this.operation=0;
    /*
        Edit:
            0 : hidden
            1 : shown
     */
    this.edit = 0;

    /* GETTING ASSETS/CONTACT.JSON CONTENT */
    $http.get('../assets/contacts.json').then(function(response){
        self.contacts = response.data;
        console.log("JSON : "+JSON.stringify(self.contacts));
    }, function(){
        console.log("Erreur");
    });
    /* END */


    this.toUpdate = function(contact){
        self.tmpContact = contact;
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

    };

    this.delete = function(contact){

    }

}]);