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
app.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase) {
        	text = text.replace(new RegExp('('+phrase+')', 'gi'),'<span class="highlighted">$1</span>');
        }
        return $sce.trustAsHtml(text);
    };
});