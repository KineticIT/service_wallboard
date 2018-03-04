
angular.module('scw').
    factory('uccx_query_service_slave', function($http) {
  var getuccx = function() {
    return $http.get('app/slave/uccx.txt');
  };

  return {
    getuccx: getuccx
  };
});