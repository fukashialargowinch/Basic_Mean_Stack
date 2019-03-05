
var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl:'./views/home.html'
  }).when('/contact',{
    templateUrl:'./views/contact.html'
  }).when('/about',{
    templateUrl:'./views/about.html'
  });
});
