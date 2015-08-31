app.controller('InboxCtrl', function ($scope, $http, $state, $interval, apiService, intervalService) {
	$scope.inbox = [];
	$scope.getEmails = function () {
		apiService.getEmails().then(function(res) {
            $scope.inbox = res.data;
        });
	};
	$scope.delete = function () {
		event.target.disabled = 'disabled';
		event.target.previousSibling.disabled = 'disabled';
		var id = this.mail.id;
		apiService.deleteEmail(id).then(function(res) {
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
			apiService.setAsRead(id);
		}
	};
	$scope.respond = function(){
    	// $location.path( "/create/:" + this.mail.id);
    	var id = this.mail.id;
    	$state.go('reply', {emailId: ':' + id});
    };
	$scope.$on('$destroy', function(){
		intervalService.clearIntervalAction();
	});
	$scope.getEmails();
	var interval;
	interval = $interval(function () { $scope.getEmails(); }, 1000 * intervalService.getRefreshInterval());
	intervalService.setIntervalAction(interval);
});
