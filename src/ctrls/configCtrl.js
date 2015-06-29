app.controller('ConfigCtrl', function($scope, $window, service) {
    var localStorage = $window.localStorage;
    $scope.interval =  service.getRefreshInterval();
    $scope.setRefreshInterval = function() {
        localStorage.interval = parseInt($scope.interval, 10);
    };
    $scope.setColor = function(color) {
        localStorage.color = color;
    };
    var defaultColor = 'white';
    $scope.getColor = function() {
        return localStorage.color || defaultColor;
    };
});
