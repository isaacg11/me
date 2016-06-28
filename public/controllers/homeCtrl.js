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

    //load fun facts on page load
    General.getRepoCount().then(function(res){
      $scope.repocount = res.data.length;
    })

    //load blogs on page load
    var my_blogs = [
      {
        image: '/public/images/mailchimp-fb-sync.png',
        title: 'Synchronize your MailChimp lists with custom Facebook Audiences. Automatically.',
        url: 'https://blog.stamplay.com/synchronize-your-mailchimp-lists-with-custom-facebook-audiences-automatically-2/'
      },
      {
        image: '/public/images/Native-language-translator TN.png',
        title: 'How To Translate Your Customer’s Messages Into Your Native Language.',
        url: 'https://blog.stamplay.com/how-to-translate-your-customers-messages-into-your-native-language/'
      },
      {
        image: '/public/images/dish.png',
        title: 'How I launched my new food review iOS app 50% faster.',
        url: 'https://blog.stamplay.com/how-i-launched-my-new-food-review-ios-app-50-faster/'
      },
      {
        image: '/public/images/ionic-fb-login.png',
        title: 'How To Add Facebook Social Login To Your Ionic App.',
        url: 'https://blog.stamplay.com/how-to-add-facebook-social-login-to-your-ionic-app/'
      },
      {
        image: '/public/images/screendy-mapme TN.png',
        title: 'Build an end-to-end mobile app without coding using ScreenDy and Stamplay.',
        url: ''
      }

    ];

    $scope.blogs = my_blogs;

    //navigate to blog
    $scope.goToBlog = function(url) {
      window.location = url;
    }

    //load videos on page load
    var my_videos = [
      {
        image: '/public/images/unified-notification-app TN.png',
        title: 'How To Create a Unified Notification App With Cisco Spark API',
        url: 'https://youtu.be/UYhWNj-gSxw'
      },
      {
        image: '/public/images/quotebot.jpg',
        title: 'How To Build a Daily News by SMS Service with NodeJS and Twilio API ',
        url: 'https://youtu.be/9wcgmwZUK9c'
      },
      {
        image: '/public/images/sms-weather.jpg',
        title: 'How To Build a Weather By SMS App With NodeJS & Twilio',
        url: 'https://youtu.be/doSttur8d7g'
      },
      {
        image: '/public/images/shop-with-me.png',
        title: 'How To Build a Real-Time Collaborative Shopping List App With PubNub API',
        url: 'https://youtu.be/Nv6tsuqtNZg'
      },
      {
        image: '/public/images/ionic-todo.png',
        title: 'How To Build a Mobile Todo List App With Ionic Framework',
        url: 'https://youtu.be/Aqck3R4ItYk'
      }
    ];

    $scope.videos = my_videos;

    //navigate to social media account
    $scope.goToSocialMedia = function(url) {
      window.location = url;
    }

  }
  })();