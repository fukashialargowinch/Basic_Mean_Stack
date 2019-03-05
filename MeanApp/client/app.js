var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: './views/home.html',
    controller: 'UserController'
  }).when('/about',{
    templateUrl: './views/about.html'
  }).when('/contact',{
    templateUrl: './views/contact.html'
  });
});
