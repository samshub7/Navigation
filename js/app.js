var app = angular.module('NearMeApp', ['leaflet-directive', 'ng-route']);

app.config('$http', function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainController',
    templateUrl: 'views/main.html'
  })
  .when('/about', {
    controller: 'AboutController',
    templateUrl: 'views/about.html'
  })
  .otherwise({
    redirectTo: '/'
  })
}) 