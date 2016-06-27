
//FACTORY

(function() {
  'use strict';
  angular.module('master')
  .factory('General', General);

  function General($http, $q){
	return {
    	getRepo1 : function(){
        var q = $q.defer();
    		$http.get('https://api.github.com/repos/isaacg11/rapid-recipe').then(function(res) {
          q.resolve(res);
        });
        return q.promise;
    	},
      getRepo2 : function(){
        var q = $q.defer();
        $http.get('https://api.github.com/repos/isaacg11/food-findr').then(function(res) {
          q.resolve(res);
        });
        return q.promise;
      },
      getRepo3 : function(){
        var q = $q.defer();
        $http.get('https://api.github.com/repos/N3phi1im/Whereabout').then(function(res) {
          q.resolve(res);
        });
        return q.promise;
      },
      getRepoCount : function(){
        var q = $q.defer();
        $http.get('https://api.github.com/users/isaacg11/repos?per_page=100').then(function(res) {
          q.resolve(res);
        });
        return q.promise;
      }
	};
}
})();