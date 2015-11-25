var app = angular.module('myApp', ['ngMaterial', 'ui.router', 'myApp.controllers', 'myApp.factories', 'myApp.filters']).config(function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('amber');
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
}).directive('parallax', ['$window', function($window) {
  return {
    restrict: 'A',
    scope: {
      parallaxRatio: '@',
      parallaxVerticalOffset: '@',
      parallaxHorizontalOffset: '@',
    },
    link: function($scope, elem, attrs) {
        var setPosition = function() {
          if (!$scope.parallaxHorizontalOffset) $scope.parallaxHorizontalOffset = '0';
          var calcValY = $window.pageYOffset * ($scope.parallaxRatio ? $scope.parallaxRatio : 1.1);
          if (calcValY <= $window.innerHeight) {
            var topVal = (calcValY < $scope.parallaxVerticalOffset ? $scope.parallaxVerticalOffset : calcValY);
            var hozVal = ($scope.parallaxHorizontalOffset.indexOf("%") === -1 ? $scope.parallaxHorizontalOffset + 'px' : $scope.parallaxHorizontalOffset);
            elem.css('transform', 'translate(' + hozVal + ', ' + topVal + 'px)');
          }
        };

        setPosition();

        angular.element($window).bind("scroll", setPosition);
        angular.element($window).bind("touchmove", setPosition);
      } // link function
  };
}]).directive('parallaxBackground', ['$window', function($window) {
  return {
    restrict: 'A',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {
      parallaxRatio: '@',
      parallaxVerticalOffset: '@',
    },
    link: function($scope, elem, attrs) {
        var setPosition = function() {
          var calcValY = (elem.prop('offsetTop') - $window.pageYOffset) * ($scope.parallaxRatio ? $scope.parallaxRatio : 1.1) - ($scope.parallaxVerticalOffset || 0);
          // horizontal positioning
          elem.css('background-position', "50% " + calcValY + "px");
        };

        // set our initial position - fixes webkit background render bug
        angular.element($window).bind('load', function(e) {
          setPosition();
          $scope.$apply();
        });

        angular.element($window).bind("scroll", setPosition);
        angular.element($window).bind("touchmove", setPosition);
      } // link function
  };
}]);
