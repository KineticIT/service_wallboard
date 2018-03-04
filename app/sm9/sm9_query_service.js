
//Service
//A GET request to SM9 via SM9.php

angular.module('scw').
factory('sm9_query_service', function($http) {

  var getSm9 = function() {
    return $http.get('server/sm9.php');
  };

  return {
    getSm9: getSm9
  };
});