/// <reference path="angular.js" />
/// <reference path="angular-route.js" />


var stazControllers = angular.module('stazControllers', []);


stazControllers.controller('IzRasponaController', ['$scope', 'stazMath', function ($scope, math) {
	$scope.items = [];

	$scope.add = function (number) {
		for (var i = 0; i < number; i++) {
		    $scope.items.push({ od: null, 'do': null, ustanova: false, sati: 8, radnoVrijeme: 8 });
		}
	}
	$scope.remove = function (index) {
		$scope.items.splice(index, 1);
		$scope.calculate();
	}
	$scope.calculate = function () {
		$scope.total = {
			u: { d: 0, m: 0, y: 0 },
			izvan: { d: 0, m: 0, y: 0 }
		};

		for (var i = 0; i < $scope.items.length; i++) {
			var item = $scope.items[i];
			if (item.od && item.do && item.od.getTime() < item.do.getTime()) {
			    var diff = math.datediff(item.od, item.do, item.sati / item.radnoVrijeme);
				math.sum($scope.total[item.ustanova ? "u" : "izvan"], diff);
			}
		}

		math.round($scope.total.u);
		math.round($scope.total.izvan);
	}

	$scope.add(5);
	$scope.calculate();
}]);

stazControllers.controller('IzVrijednostiController', ['$scope', 'stazMath', function ($scope, math) {
	$scope.items = [];

	$scope.add = function (number) {
		for (var i = 0; i < number; i++) {
			$scope.items.push({ d: 0, m: 0, y: 0, ustanova: false });
		}
	}
	$scope.remove = function (index) {
		$scope.items.splice(index, 1);
		$scope.calculate();
	}
	$scope.calculate = function () {
		$scope.total = {
			u: { d: 0, m: 0, y: 0 },
			izvan: { d: 0, m: 0, y: 0 }
		};

		for (var i = 0; i < $scope.items.length; i++) {
			var item = $scope.items[i];
			if (item.d || item.m || item.y) {
				math.sum($scope.total[item.ustanova ? "u" : "izvan"], item);
			}
		}

		math.round($scope.total.u);
		math.round($scope.total.izvan);
	}

	$scope.add(5);
	$scope.calculate();
}]);