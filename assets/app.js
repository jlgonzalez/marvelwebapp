var app = angular.module('app', [])
app.controller('PostsCtrl', function ($scope,$http) {
  $scope.newMarvelHero = function () {}

  $http.get('/api/heroes').success(function(hero){
     $scope.hero = hero
  })


})
      