
// slave 
// update a view with data returned from SM9; password reset and unprocessed interactions.

angular.module('scw').
controller('sm9_controller_slave', function ($scope, $http, $interval, sm9_query_service_slave) {

  $interval(function () {
    sm9_query_service_slave.getSm9().success(function (data) {

      $scope.sm9 = data;
      $scope.Row2_Box_02 = $scope.sm9.count;
      $scope.Row2_Box_03 = $scope.sm9.time0;
      $scope.Row2_Box_02_Time0 = $scope.sm9.time0;
      $scope.Row2_Box_02_Time1 = $scope.sm9.time1;
      $scope.Row2_Box_02_Time2 = $scope.sm9.time2;
      $scope.Row2_Box_01 = $scope.sm9.pass_count;
      $scope.Row2_Box_01_Time0 = $scope.sm9.pass0;
      $scope.Row2_Box_01_Time1 = $scope.sm9.pass1;
      $scope.Row2_Box_01_Time2 = $scope.sm9.pass2;

      if ($scope.sm9.pass_count == 0) {
        $scope.Row2_Box_01 = '';
      };

      if ($scope.sm9.count == 0) {
        $scope.Row2_Box_02 = '';
      };

    })
  }, 5000); //update the view every 5 seconds.
});