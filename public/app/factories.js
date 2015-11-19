angular.module('myApp.factories', [])
  .factory('ProfilePicFactory', ['$http', function($http) {
    var factory = {};

    factory.getHash = function(cb) {
      var defaultImg = '?d=mm';
      $http({
        method: 'GET',
        url: '/api/users/picHash'
      }).then(function success(response) {
        console.log(response.data);
        cb(response.data + defaultImg);
      });
    };

    return factory;
  }])
  .factory('PostsFactory', ['$http', function($http) {
    var factory = {};

    factory.getPosts = function(cb) {
      $http({
        method: 'GET',
        url: '/api/posts'
      }).then(function success(response) {
        console.log(response.data);
        cb(response.data);
      });
    }

    return factory;
  }]);
