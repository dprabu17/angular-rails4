angular
    .module('AngularRails', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
        $locationProvider.html5Mode(true);
    });

app = angular
    .module('myApp', [
        'ngResource',
        'ngAnimate',
        'ui.router',
        'templates'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

     /**
     * Routes and States
     */
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        })
        .state('dashboard', {
            abstract: true,
            url: '/dashboard',
            templateUrl: 'dashboard/layout.html'
        })
        .state('dashboard.one', {
            url: '',
            templateUrl: 'dashboard/one.html'
        })
        .state('dashboard.two', {
            url: '/two',
            templateUrl: 'dashboard/two.html'
        })
        .state('dashboard.three', {
            url: '/three',
            templateUrl: 'dashboard/three.html'
        });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
    }).factory("User", [
  "$resource", function($resource) {
    return $resource("/entries/:id", {
      id: "@id"
    }, {
      update: {
        method: "PUT"
      }
    });
  }
]);