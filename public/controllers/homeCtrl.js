//CONTROLLER
(function() {
  'use strict';
  angular.module('master')
  .controller('homeCtrl', homeCtrl);
  homeCtrl.$inject = [
    "General",
    '$state',
    "$http",
    "$scope", 
    "$stamplay",
    '$window'
  ];
  function homeCtrl(
    General,
    $state, 
    $http, 
    $scope, 
    $stamplay, 
    $window
    )
  {

    //on page load, get and display github repo data
    var arr = [];

    General.getRepo1().then(function(res){
      var repo_one = {
        name: res.data.name,
        forks: res.data.forks_count,
        stars: res.data.stargazers_count,
        watchers: res.data.watchers,
        url: res.data.homepage,
        updated: res.data.updated_at,
        description: "Recipe lookup website"
      };

      arr.push(repo_one);

      General.getRepo2().then(function(res){
        var repo_two = {
          name: res.data.name,
          forks: res.data.forks_count,
          stars: res.data.stargazers_count,
          watchers: res.data.watchers,
          url: res.data.homepage,
          updated: res.data.updated_at,
          description: "Food locator website"
        };

        arr.push(repo_two);

        General.getRepo3().then(function(res){
          var repo_three = {
            name: res.data.name,
            forks: res.data.forks_count,
            stars: res.data.stargazers_count,
            watchers: res.data.watchers,
            url: res.data.homepage,
            updated: res.data.updated_at,
            description: "Photo album app"
          };

          arr.push(repo_three);
          $scope.repos = arr;
        });
      })
    });

    //navigate to rep
    $scope.goToRepo = function(url) {
      window.location = url;
    };

    //load skills on page load
    var my_skills = [
      {
        image: '/public/images/design.png',
        title: 'Web Design',
        description: 'Information architecture, user interface (UI), navigation, responsive layout, colors, fonts, and imagery.'
      },
      {
        image: '/public/images/dev.png',
        title: 'Web Development',
        description: 'Programming of browser functionality (front-end) and server-side operations (back-end). Includes websites and mobile apps.'
      },
      {
        image: '/public/images/ux.png',
        title: 'User Experience',
        description: 'Overall useability, accessability, simplicity, balance, contrast, emphasis, rhythm, and unity.'
      }
    ];

    $scope.skills = my_skills;


  }
  })();