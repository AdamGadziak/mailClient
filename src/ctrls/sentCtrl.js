app.controller('SentCtrl', function ($scope, $http, service) {
	$scope.outbox = [];
	$scope.getSent = function () {
		service.getSent().then(function(res) {
            $scope.outbox = res.data;
        });
	};
	$scope.getSent();
});