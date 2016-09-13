var app = angular.module('app', [])

app.controller('HeroesCtrl', function ($scope,HeroesSvc) {
  $scope.newMarvelHero = function () { 
  	HeroesSvc.fetch()
  	.success(function (hero) {
    	$scope.hero = hero
  })
   }

   HeroesSvc.fetch()
  .success(function (hero) {
    $scope.hero = hero
  })

  HeroesSvc.allheroes()
  .success(function (allheroes) {
    $scope.allheroes = allheroes
  })


})
      

app.service('HeroesSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/randomhero')
  }

   this.allheroes = function () {
    return $http.get('/api/heroes')
  }
})
