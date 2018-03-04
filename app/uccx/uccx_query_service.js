
angular.module('scw').
    factory('uccx_query_service', function($http) {
  var getuccx = function() {
    return $http.get('server/uccx.php');
  };

  return {
    getuccx: getuccx
  };
});