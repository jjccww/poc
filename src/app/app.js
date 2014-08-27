angular.module( 'app', [
  'templates-app',
  'templates-common',
  'app.home',
  'app.about',
  'ui.router',

  'services.firstname',
  'services.lastname',
  'services.fullname'


])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );

  $stateProvider
    .state( 'home', {
      url: '/home',
      views: {
        "main": {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      }
      /*,
      resolve: {
        homeObj: function() {
          console.log('homeObj');
          return;
        }
      }*/
    })
    .state('about', {
      url: '/about',
      views: {
        "main": {
          controller: 'AboutCtrl',
          templateUrl: 'about/about.tpl.html'
        }
      }
    })
    ;


})


.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  /*
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
*/
})

;

