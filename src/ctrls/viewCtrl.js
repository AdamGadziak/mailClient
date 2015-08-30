app.controller('ViewCtrl', function ($scope, $http, $state, $stateParams, service) {
    // var email_id = $location.path().split(":")[1];
    var email_id = $stateParams.emailId.substring(1);
    $scope.email = {};
    $scope.getEmail = function() {
        service.getEmail(email_id).then(function(email){
            $scope.email = {
                id: email.data.id,
                title: email.data.title,
                date: email.data.sent || email.data.received,
                sender: email.data.sender || "Ja",
                receiver: email.data.receiver || "Ja",
                content: email.data.content
            };
        });
    };
    $scope.callToDeleteEmail = function() {
        service.deleteEmail(email_id).then(function(res){
            $state.go("inbox");
        });
    };
    $scope.respond = function(){
    	// $location.path( "/create/:"+$scope.email.id);
        $state.go('reply', {emailId: ':' + $scope.email.id});
    };
});
