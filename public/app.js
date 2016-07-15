(function() {
  'use strict';
  var app = angular.module('master', ['ui.router','ngStamplay'])
  .config(Config);
  Config.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];


function Config($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state('home',{
    url: '/',
    templateUrl: './public/views/home.html'
  }).
  state('resume',{
    url: '/resume',
    templateUrl: './public/views/resume.html'
  }).
  state('contact',{
    url: '/contact',
    templateUrl: './public/views/contact.html'
  }).
  state('archives',{
    url: '/archives',
    templateUrl: './public/views/archives.html'
  });
  
  $urlRouterProvider.otherwise('/');
  //$locationProvider.html5Mode(true);
  }

})();