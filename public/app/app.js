var app = angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.factories']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    console.log('redirecting');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: "partials/home.html",
        controller: 'HomeCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: "partials/login.html"
      })
      .state('register', {
        url: '/register',
        templateUrl: "partials/register.html"
      })
      .state('front', {
        url: '/',
        templateUrl: "partials/parallax.html"
      });
    $urlRouterProvider.otherwise('/');
  }
]);

// app.factory('ProfilePicFactory', function() {
//   var factory = {};
//   factory.getHash = function() {
//     return "7f94f01f70ffa2d3435b038fd75b48f2"
//   };
//   return factory;
// });
