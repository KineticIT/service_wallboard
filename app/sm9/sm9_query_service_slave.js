
//Service (slave version)
//A GET request to SM9 via SM9.php

angular.module('scw').
factory('sm9_query_service_slave', function($http) {
	
  var getSm9 = function() {
    return $http.get('app/slave/sm9.txt');
  };

  return {
    getSm9: getSm9
  };
});