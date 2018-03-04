
angular.module('scw').
factory('add_message_service', function($http, $timeout){
      
  return {
    add : function(message_text, message_type){$http({
            method: "post",
            url: "server/msg.php",
            data: {
              messages: message_text,
              message_type: message_type
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
        }
      }
}).
factory('messageService', function($http) {
  var getmessage = function() {
    return $http.get('app/messaging/msg.txt?q=' + Math.random())
  };

  return {
    getmessage : getmessage
  };
});