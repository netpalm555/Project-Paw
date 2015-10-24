(function() {
  var app = angular.module('myApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true).hashPrefix('!');
      console.log('redirecting');
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: "partials/home.html",
          controller: HomeCtrl
        });
      $urlRouterProvider.otherwise('/');
    }
  ]);
})();
