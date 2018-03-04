angular.module('scw').
controller('add_message_controller', function ($scope, $http, $interval, add_message_service, messageService, $timeout) {

  //MSG update view
  $interval(function () {
    messageService.getmessage().success(function (data) {

      $scope.message = data;
      $scope.Row4_Box_01 = $scope.message['messages'];
      $scope.message_type = $scope.message['message_type'];

      if ($scope.Row4_Box_01 == "") {
        $scope.bubble_message = "";
      } else if ($scope.message_type == "alert") {
        $scope.bubble_message = "bubble_message_red";
        $scope.message_icon = "ion-alert icon";
      } else if ($scope.message_type == "warning") {
        $scope.message_icon = "ion-compose icon";
        $scope.bubble_message = "bubble_message_orange";
      } else if ($scope.message_type == "notify") {
        $scope.message_icon = "ion-chatboxes icon";
        $scope.bubble_message = "bubble_message_green";
      };
    })
  }, 30000);


  //MSG submit
  $scope.mySubmit = function () {

    if ($scope.message_type == '') {
      $scope.message_type = 'notify';
    };
    add_message_service.add($scope.messageText, $scope.message_type);
    //console.log($scope.messageText);

    $timeout(function update() {
      add_message_service.add('', '');
    }, 1900000);

    update();
  };

  //message page
  $scope.myFunc = function (box) {
    if (box == "chred") {
      $scope.New_Message_colour = "stage stage-alert";
      $scope.message_type = "alert";
      $scope.bubble_message = "stage stage-alert";

    } else if (box == "chora") {
      $scope.New_Message_colour = "stage stage-warning";
      $scope.message_type = "warning";
      $scope.bubble_message = "stage stage-warning";
    } else if (box == "chgre") {
      $scope.New_Message_colour = "stage stage-green";
      $scope.message_type = "notify";
      $scope.bubble_message = "stage stage-green";
    }
  };

  $scope.New_Message_colour = "stage stage-green";
  $scope.Row1_Box_01_colour = "stage stage-green";
  $scope.Row1_Box_02_colour = "stage stage-green";
  $scope.Row1_Box_03_colour = "stage stage-green";
  $scope.Row1_Box_04_colour = "stage stage-green";
  $scope.Row2_Box_01_colour = "stage stage-blue";
  $scope.Row2_Box_02_colour = "stage stage-blue";
  $scope.Row2_Box_03_colour = "stage stage-blue";
  $scope.Row3_Box_01_colour = "stage stage-purple";
  $scope.Row3_Box_02_colour = "stage stage-purple";
  $scope.Row3_Box_03_colour = "stage stage-green";


});