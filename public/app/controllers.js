angular.module('myApp.controllers', [])
  .controller('HomeCtrl', ['$scope', '$http', 'PostsFactory', function($scope, $http, PostsFactory) {
    PostsFactory.getPosts(function(posts) {
      $scope.posts = posts;
      console.log(posts);
    });
  }])
  .controller('ProfilePicCtrl', ['$scope', '$http', 'ProfilePicFactory', function($scope, $http, ProfilePicFactory) {
    ProfilePicFactory.getHash(function(hash) {
      console.log(hash);
      $scope.hash = hash;
    });
  }]);
