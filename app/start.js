//Main module/controller
var wallboard = angular.module('scw', []);

//config
wallboard.config(['$httpProvider', function($httpProvider) {}]);

//controller
wallboard.controller('scwCtrl', function($scope) {
	
	vm = this;
  //set ionic icons
  $scope.page_icon = "ion-ios-photos-outline";
  $scope.list_icon = "ion-clipboard";
  $scope.page_status_icon = "ion-ios-pulse";
  $scope.Row1_Box_01_icon = "ion-person-stalker";
  $scope.Row1_Box_02_icon = "ion-chatboxes";
  $scope.Row1_Box_03_icon = "ion-compose";
  $scope.Row1_Box_04_icon = "ion-alert";
  $scope.Row2_Box_01_icon = "ion-unlocked";
  $scope.Row2_Box_02_icon = "ion-clipboard";
  $scope.Row2_Box_03_icon = "ion-clipboard";

  //set titles
  $scope.page_title = "Service Centre Wallboard";
  $scope.Row1_Box_01_title = "Title 01";
  $scope.Row1_Box_02_title = "Title 02";
  $scope.Row1_Box_03_title = "Title 03";
  $scope.Row1_Box_04_title = "Title 04";
  $scope.Row2_Box_01_title = "Title 05";
  $scope.Row2_Box_02_title = "Title 06";
  $scope.Row2_Box_03_title = "Title 07";
  $scope.Row3_Box_01_title = "Title 08";
  $scope.Row3_Box_02_title = "Title 09";
  $scope.Row3_Box_03_title = "Title 10";

  //set colours
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
  
  //set initial values
  $scope.Row1_Box_01 = "0";
  if ($scope.Row1_Box_01 == ''){$scope.Row1_Box_01 = "0";}
  $scope.Row1_Box_02 = "0";
  $scope.Row1_Box_03 = "0";
  $scope.Row1_Box_04 = "0";
  $scope.Row2_Box_01 = "0";
  $scope.Row2_Box_02 = "0";
  $scope.Row2_Box_03 = "0";
  $scope.Row3_Box_01 = "0";
  $scope.Row3_Box_02 = "0";
  $scope.Row3_Box_03 = "0";
  
  //set message
  $scope.Row4_Box_01 = "";
  $scope.Row4_Box_01_colour = "";
  $scope.message_type = "key";
  $scope.bubble_message = "";
  $scope.messageText = 'welcome';

});