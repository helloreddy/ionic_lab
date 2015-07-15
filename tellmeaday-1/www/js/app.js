// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('tellmeaday', ['ionic'])

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
})

.config(function($stateProvider, $urlRouterProvider){
  // Set up the initial routes that our app will respond to.
  // These are then tied up to our nav router which animates and
  // updates a navigation bar
  $stateProvider.state('publicPiecesView', {
    url: '/',
    templateUrl: '/public_pieces.html',
    controller: 'PublicPiecesCtrl'
  })

  // if the url matches something like /movie/88 then this route
  // will fire off the MovieDetailCtrl (controllers.js)
  .state('pieceDetailView', {
    url: '/piece/:pieceId',
    templateUrl: '/piece_detail.html',
    controller: 'PieceDetailCtrl'
  });

  // if none of the above routes are met, use this fallback
  $urlRouterProvider.otherwise('/');
});
