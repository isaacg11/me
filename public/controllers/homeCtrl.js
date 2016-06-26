//CONTROLLER
(function() {
  'use strict';
  angular.module('master')
  .controller('homeCtrl', homeCtrl);
  homeCtrl.$inject = [
    '$state',
    "$http",
    "$scope", 
    "$stamplay",
    '$window'
  ];
  function homeCtrl(
    $state, 
    $http, 
    $scope, 
    $stamplay, 
    $window
    )
  {

    $scope.test = function() {
      alert('blah!');
    }

  }
  })();