angular.module('myApp.controllers', [])
  .controller('HomeCtrl', ['$scope', '$http', 'PostsFactory', function($scope, $http, PostsFactory) {
    PostsFactory.getPosts(function(posts) {
      $scope.posts = posts;
      console.log(posts);
    });
  }])
  .controller('HomeHeaderCtrl', ['$rootScope', '$scope', '$http', 'ProfilePicFactory', function($rootScope, $scope, $http, ProfilePicFactory) {
    ProfilePicFactory.getHash(function(hash) {
      console.log(hash);
      $scope.hash = hash;
    });
    $scope.openLeftNav = function() {
      $rootScope.$broadcast('toggleNav', true);
    }
  }])
  .controller('SidenavCtrl', ['$scope', '$mdSidenav', '$mdMedia', function($scope, $mdSidenav, $mdMedia) {
    $scope.$on('toggleNav', function(event, args) {
      $mdSidenav('left').toggle();
      console.log("is open: " + $mdSidenav('left').isOpen());
    });
  }]);
