angular.module("noteApp").controller("noteCtrl", function(){

    var self = this;

    this.messageNote = "";
    this.info;
    this.status;

    this.save = function(){
        console.log("Enregistrement de "+self.messageNote);
    };

    this.clear = function(){
        console.log("Clear");
        self.messageNote = "";
    };

    this.count = function(){
        var x = 100 - self.messageNote.length;
        console.log("wsh : "+x);

        return (100 - self.messageNote.length);
    };
});