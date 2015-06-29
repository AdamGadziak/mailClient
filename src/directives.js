app.directive('search', function () {
	return {
		restrict: 'E',
		templateUrl: 'src/views/search.html'
	};
});
app.directive('menu', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/views/menu.html',
        controller: 'ConfigCtrl'
    };
});