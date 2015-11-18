angular.module('myApp.controllers', [])
  .controller('HomeCtrl', function($scope, $http) {

  })
  .controller('ProfilePicCtrl', ['ProfilePicFactory', function($scope, ProfilePicFactory) {
    $scope.hash = ProfilePicFactory.hash;
  }]);
