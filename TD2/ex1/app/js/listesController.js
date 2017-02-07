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
        console.log("add to included");
        console.log("Produits selectionnés : ");
        for(i=0; i<self.selectedDispoItem.length; i++){
            self.removeItemInArray(self.dispoItems, self.selectedDispoItem[i]);
            self.includedItems.push(self.selectedDispoItem[i]);
        }
        self.selectedDispoItem = [];
    };

    this.addAllToIncluded = function(){
        console.log("add all to included");

        for(i=0; i<self.dispoItems.length; i++){
            self.includedItems.push(self.dispoItems[i]);
        }
        self.dispoItems.length = 0;
    };

    this.removeFromIncluded = function(){
        console.log("remove from included");
        console.log("Produits selectionnés : ");
        for(i=0; i<self.selectedIncludedItems.length; i++){
            self.removeItemInArray(self.includedItems, self.selectedIncludedItems[i]);
            self.dispoItems.push(self.selectedIncludedItems[i]);
        }
        self.selectedIncludedItems = [];
    };

    this.removeAllFromIncluded = function(){
        console.log("remove all from included");

        for(i=0; i<self.includedItems.length; i++){
            self.dispoItems.push(self.includedItems[i]);
        }
        self.includedItems.length = 0;
    };


    this.removeItemInArray = function(arr, elem){
        j=0;
        while(arr[j] != elem){j++} //Recherche
        arr.splice(j, 1); //Suppression
    };

    this.goToStep = function(step){
        if(self.includedItems.length!=0){
            self.step = step;
            return true;
        }
        return false;
    }

}]);