angular.module("serviceApp").controller("serviceCtrl", ['$http', function($http){

    var self = this;

    this.reduc = 0;
    console.log("Loading JSON file");
    this.promo;

    $http.get('assets/promo.json').then(function(response){
        console.log("JSON : "+JSON.stringify(response.data));
        self.promo = response.data;
    }, function(){});

    this.promoEnabled = false;
    this.promoCode="";

    this.nbActifs = 1;

    this.services =
    [
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
            "name": "Design",
            "price": 400,
            "active":false
        },{
            "name": "Integration",
            "price": 250,
            "active":false
        },{
            "name": "Formation",
            "price": 220,
            "active":false
        }
    ];


    this.total = function(){
        var tot=0;
        for(var i = 0; i<self.services.length; i++){
            if(self.services[i].active){
               tot+= self.services[i].price;
            }
        }
        return tot - (tot * self.reduc);
    };

    this.toggleActive = function(service){
        service.active = !service.active;
        if(service.active) self.nbActifs++;
        else self.nbActifs--;
    };

    this.checkPromo = function(){
        if(self.promoEnabled) {
            if(self.promo[self.promoCode]){
                self.reduc = self.promo[self.promoCode];
            }else{
                self.reduc = 0;
            }
        }else{
            self.reduc = 0;
        }
    }
}]);