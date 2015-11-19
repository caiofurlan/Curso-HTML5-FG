// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'ui.router',
  'ngResource'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

angular
  .module('starter')
  .config(uiRouterConfig);

function uiRouterConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
}


angular
  .module('starter')
  .service('ApiService', ApiService);

function ApiService($resource) {
  return $resource('http://private-c13c8-users102.apiary-mock.com/persons');
}

angular
  .module('starter')
  .controller('HomeController', HomeController);

function HomeController($scope, ApiService) {
  ApiService
    .query()
    .$promise
    .then(function(data) {
      $scope.items = data;
    })
    .catch(function(err) {
      console.log('err');
    });
}