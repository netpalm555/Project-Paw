angular.module('myApp.filters', [])
.filter('html', ['$sce', function($sce){
    return function(input){
        return $sce.trustAsHtml(input);
    }
}]);
