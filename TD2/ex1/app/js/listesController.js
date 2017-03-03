angular.module("listApp").controller("listeCtrl", ['$http', function($http){

    var self = this;


    this.dispoItems = [];
    this.includedItems = [];
    this.selectedDispoItem = [];
    this.selectedIncludedItems = [];
    this.step = 0;


    /* GETTING ASSETS/ITEMS.JSON CONTENT */
    $http.get('../assets/items.json').then(function(response){
        self.dispoItems = response.data;
        console.log("Items : "+JSON.stringify(self.dispoItems));
        console.log("Items[0] : "+self.dispoItems[0].title);
    }, function(){});
    /* END */

    this.addToIncluded = function(){

        for(i=0; i<self.selectedDispoItem.length; i++){
            self.dispoItems.splice(self.dispoItems.indexOf(self.selectedDispoItem[i]), 1); //Suppression
            self.includedItems.push(self.selectedDispoItem[i]);
        }
        self.selectedDispoItem = [];
    };

    this.addAllToIncluded = function(){
        Array.prototype.push.apply(self.includedItems, self.dispoItems);//Merge dispoItems in includedItems
        self.dispoItems.length = 0;
    };

    this.removeFromIncluded = function(){

        for(i=0; i<self.selectedIncludedItems.length; i++){
            self.includedItems.splice(self.includedItems.indexOf(self.selectedIncludedItems[i]), 1); //Suppression
            self.dispoItems.push(self.selectedIncludedItems[i]);
        }
        self.selectedIncludedItems = [];
    };

    this.removeAllFromIncluded = function(){
        Array.prototype.push.apply(self.dispoItems, self.includedItems); //Merge includedItems in dispoItems
        self.includedItems.length = 0;
    };

    this.goToStep = function(step){
        if(step == 0 || step == 1){
            if(self.includedItems.length!=0){
                self.step = step;
                return true;
            }
            return false;
        }
    }

}]);