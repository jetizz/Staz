/// <reference path="angular.js" />
/// <reference path="angular-route.js" />

var stazApp = angular.module("stazApp", [
	"ngRoute",
	"stazServices",
	"stazControllers"
]);


stazApp.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider
			.when('/iz-raspona', {
				templateUrl: 'views/iz-raspona.html',
				controller: 'IzRasponaController'
			})
			.when('/iz-vrijednosti', {
				templateUrl: 'views/iz-vrijednosti.html',
				controller: 'IzVrijednostiController'
			})
			.otherwise({
				redirectTo: '/iz-raspona'
			});
	}]);
