(function() {
  var app = angular.module('myApp', ['ngRoute']).
  config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      console.log('redirecting');
      $routeProvider
        .when("/home", {
          templateUrl: "partials/home.html",
          controller: HomeCtrl
        })
        .otherwise({
          redirectTo: "/"
        });
    }
  ]);
})();
