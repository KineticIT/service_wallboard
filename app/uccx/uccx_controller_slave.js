
angular.module('scw').
    controller('uccx_controller_slave', function($scope, $http, $interval, uccx_query_service_slave) {

  // UCCX update view
  $interval(function(){uccx_query_service_slave.getuccx().success(function(data) {
    $scope.uccx = data;

            $("#indicator").toggle( "blind" );
            $("#indicator").toggle( "highlight" );
	
			$scope.Row1_Box_01 = $scope.uccx.availableAgents;
			$scope.Row1_Box_02 = $scope.uccx.talkingAgents;
			$scope.Row1_Box_03 = $scope.uccx.unavailableAgents;
			$scope.Row1_Box_04 = $scope.uccx.callsWaiting;
			$scope.Row3_Box_01 = $scope.uccx.totalCalls;
			$scope.Row3_Box_02 = $scope.uccx.CallsHandled;
			$scope.Row3_Box_03 = $scope.uccx.convAvgWaitDuration;
    });
  }, 5000);
});