app.controller('InboxCtrl', function ($scope, $http, $state, $interval, service) {
	$scope.inbox = [];
	$scope.getEmails = function () {
		service.getEmails().then(function(res) {
            $scope.inbox = res.data;
        });
	};
	$scope.delete = function () {
		event.target.disabled = 'disabled';
		event.target.previousSibling.disabled = 'disabled';
		var id = this.mail.id;
		service.deleteEmail(id).then(function(res) {
            $scope.getEmails();
        });
	};
	$scope.read = function () {
		if (event.target.type === 'submit') {
			return;
		}
		var id = this.mail.id;
		// $location.path('/view/:' + id);
    	$state.go('email', {emailId: ':' + id});
		if (!this.mail.read) {
			service.setAsRead(id);
		}
	};
	$scope.respond = function(){
    	// $location.path( "/create/:" + this.mail.id);
    	var id = this.mail.id;
    	$state.go('reply', {emailId: ':' + id});
    };
	$scope.$on('$destroy', function(){
		service.clearIntervalAction();
	});
	$scope.getEmails();
	var interval;
	interval = $interval(function () { $scope.getEmails(); }, 1000 * service.getRefreshInterval());
	service.setIntervalAction(interval);
});
