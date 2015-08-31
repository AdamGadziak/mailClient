app.controller('SentCtrl', function ($scope, $http, apiService) {
	$scope.outbox = [];
	$scope.getSent = function () {
		apiService.getSent().then(function(res) {
            $scope.outbox = res.data;
        });
	};
	$scope.getSent();
});