contactApp.directive("contactElem", function() {
    return {
        restrict: 'A',
        templateUrl: "templates/contactElem.html"
    };
});

contactApp.directive("frmContact", function(){
    return {
        restrict: 'E',
        templateUrl: "templates/frmContact.html"
    };
});