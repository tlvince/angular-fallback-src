'use strict';
angular.module('App', ['fallback.src'])
  .controller('fourthCtrl', function($scope) {
    $scope.fallbacks = [
      'broken.png',
      'broken.png',
      'img/wiki.png'
    ];
  });
