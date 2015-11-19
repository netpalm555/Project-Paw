angular.module('myApp.controllers', [])
  .controller('HomeCtrl', function($scope, $http) {

  })
  .controller('ProfilePicCtrl', ['$scope', '$http', 'ProfilePicFactory', function($scope, $http, ProfilePicFactory) {
    ProfilePicFactory.getHash(function(hash) {
      console.log(hash);
      $scope.hash = hash;
    });
  }]);
