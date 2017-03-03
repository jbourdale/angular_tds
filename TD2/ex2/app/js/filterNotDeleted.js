contactApp.filter('notDeleted', [function(){
    return function(input, symbol){
        contactsNotDeleted = [];

        for (var i in input){
            if(input[i].deleted == 0){
                contactsNotDeleted.push(input[i]);
            }
        }
        return contactsNotDeleted;
    };
}]);