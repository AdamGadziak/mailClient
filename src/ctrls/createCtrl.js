app.controller('CreateCtrl', function($scope, $http, $location, service) {
    var email_id = $location.path().split(":")[1];
    $scope.email = {
        receivers: [],
        title: null,
        content: null
    };
    $scope.validEmail = true;
    $scope.sendEmail = function() {
        if ($scope.mailForm.$valid) {
            service.sendEmail($scope.email).then(function(res) {
                $location.path("/sent");
            });
        }
    };
    $scope.validateEmail = function() {
        var receivers = $scope.email.receivers;
        for (var i in receivers) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if (!re.test(receivers[i])) {
                $scope.validEmail = false;
                break;
            } else {
                $scope.validEmail = true;
            }
        }
    };
    if (email_id) {
        service.getEmail(email_id).then(function(email) {
            $scope.email = {
                receivers: [].concat(email.data.sender),
                title: "RE: " + email.data.title,
                content: "\r\n \r\n ---- Ostatnia wiadomość ---- \r\n"+email.data.content
            };
        });
    }

});
