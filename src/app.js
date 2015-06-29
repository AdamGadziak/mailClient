app = angular.module('myapp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
	.state('inbox', {
		url: "/inbox",
		templateUrl: "src/views/inbox.html",
		controller: 'InboxCtrl'
	})
	.state('home', {
		url: "/",
		templateUrl: "src/views/inbox.html",
		controller: 'InboxCtrl'
	})
	.state('email', {
		url: "/view/:emailId",
		templateUrl: "src/views/view.html",
		controller: 'ViewCtrl'
	})
	.state('sent', {
		url: "/sent",
		templateUrl: "src/views/sent.html",
		controller: 'SentCtrl'
	})
	.state('create', {
		url: "/create",
		templateUrl: "src/views/create.html",
		controller: 'CreateCtrl'
	})
	.state('reply', {
		url: "/create/:emailId",
		templateUrl: "src/views/create.html",
		controller: 'CreateCtrl'
	})
	.state('config', {
		url: "/config",
		templateUrl: "src/views/config.html",
		controller: 'ConfigCtrl'
	});
});