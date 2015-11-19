angular.module('myApp.factories', [])
  .factory('ProfilePicFactory', ['$http', function($http) {
    var factory = {};
    factory.getHash = function(cb) {
      var hash = '?d=mm';
      $http({
        method: 'GET',
        url: '/api/users/picHash'
      }).then(function success(response) {
        console.log(response.data);
        if(response.data || response.data != "") {
          cb(response.data);
        } else {
          cb(hash);
        }
      });
    };
    return factory;
  }]);
