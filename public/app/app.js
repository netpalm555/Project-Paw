var app = angular.module('myApp', ['ngMaterial', 'ui.router', 'myApp.controllers', 'myApp.factories', 'myApp.filters']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    console.log('redirecting');
    $stateProvider
      .state('app', {
        url: '/',
        views: {
          'base': {
            templateUrl: 'partials/front.html'
          },
          'header': {
            templateUrl: 'partials/header.html'
          }
        }
      })
      .state('app.home', {
        url: 'home',
        views: {
          'base@': {
            templateUrl: 'partials/home.html'
          },
          'sidebar@app.home': {
            templateUrl: 'partials/sidebar.html'
          },
          'content@app.home': {
            templateUrl: 'partials/posts.html',
            controller: 'HomeCtrl'
          },
          'footer@app.home': {
            templateUrl: 'partials/footer.html'
          }
        }
      })
      .state('app.home.login', {
        url: '^/login',
        views: {
          'content@app.home': {
            templateUrl: 'partials/login.html'
          }
        }
      })
      .state('app.home.register', {
        url: '^/register',
        views: {
          'content@app.home': {
            templateUrl: 'partials/register.html'
          }
        }
      })
      .state('app.home.newName', {
        url: '^/profile',
        views: {
          'content@app.home': {
            templateUrl: 'partials/profile.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }
]);
