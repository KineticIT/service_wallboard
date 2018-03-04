//Main module/controller
var wallboard = angular.module('scw', []);

//config
wallboard.config(['$httpProvider', function($httpProvider) {}]);

//controller
wallboard.controller('scwCtrl', function($scope) {
	
	vm = this;
  //set icons
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
  $scope.Row1_Box_01_title = "Ready";
  $scope.Row1_Box_02_title = "Talking";
  $scope.Row1_Box_03_title = "Working";
  $scope.Row1_Box_04_title = "Waiting";
  $scope.Row2_Box_01_title = "Password Reset";
  $scope.Row2_Box_02_title = "Interactions";
  $scope.Row2_Box_03_title = "Longest Interaction";
  $scope.Row3_Box_01_title = "Calls Presented";
  $scope.Row3_Box_02_title = "Calls Handled";
  $scope.Row3_Box_03_title = "Average Wait";
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
  
  $scope.Row1_Box_01 = "0";
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
  $scope.messageText = '';

  

});