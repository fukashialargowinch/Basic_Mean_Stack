angular.module('myApp').controller('UserController', function($scope, $http){
  $scope.RegisterUser = function(){
    $http.post('/SaveUser',$scope.User).then(function(response){
      console.log('User Registered');
    });
    init();
  }

  var init = function(){
    $http.get('/GetUser').then(function(response){
      $scope.UserDetails = response.data;
    });
  }
  init();
});
