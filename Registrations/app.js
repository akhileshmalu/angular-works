var app = angular.module("myGOTApp", ["ngRoute"]);

app.config(function($routeProvider) {

	$routeProvider
	.when("/", { 
		templateUrl : "main.html"
	})
	.when("/john", {
		templateUrl : "john.html"
	})
	.when("/cercei", {
		templateUrl : "cercei.html"
	})
	.when("/tyrian", {
		templateUrl : "tyrian.html"
	});


});
