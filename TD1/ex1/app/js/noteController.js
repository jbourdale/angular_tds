angular.module("noteApp").controller("noteCtrl", ['$cookies', function($cookies){

    var self = this;
    this.saved = $cookies.get("noteApp_note"); //Getting note saved
        console.log("Clear");
    //Initialising textarea
    if(this.saved) this.messageNote = this.saved;
    else this.messageNote = "";

    //Information bubble text
    this.info = "";

    /*
     * Status :
     *  0 : initiale, bulle d'info non affiché
     *  1 : sauvegarde
     *  2 : modifé
     *  3 : erreur
     */
    this.status = 0;

    this.save = function(){
        if (this.count() >= 0){
            $cookies.put("noteApp_note", self.messageNote);
            self.info = "Note sauvegardée.";
            self.status = 1;
        }else{
            self.info="Note trop longue, enregistrement non effecuté.";
            self.status = 3;
        }
    };

    this.clear = function(){
        self.messageNote = "";
        self.status = 0;
    };

    this.count = function(){
        return (100 - self.messageNote.length);
    };

    this.modifie = function(){
        if(self.messageNote != self.saved){
            this.status = 2;
            this.info="Note modifiée";
        }else {
            this.status = 0;
            this.info = "";
        }
    };
}]);