/// <reference path="angular.js" />
/// <reference path="angular-route.js" />
/// <reference path="angular-resource.js" />

var stazServices = angular.module('stazServices', []);

stazServices.factory('stazMath', function () {
	var daysInMonth = function (month, year) {
		return new Date(year, month, 0).getDate();
	}
	var factor = function (a, f) {
		a.d *= f;
		a.m *= f;
		a.y *= f;
		return a;
	}

	return {
		datediff: function (d1, d2, f) {
			var y = d2.getFullYear() - d1.getFullYear(),
				m = d2.getMonth() - d1.getMonth(),
				d = d2.getDate() - d1.getDate();

			if (d < 0) {
				m--;
				d = daysInMonth(d1.getFullYear(), d1.getMonth()) - d1.getDate() + 1 + d2.getDate();
			}
			else {
				d++;
			}

			if (m < 0) {
				y--;
				m += 12;
			}

			return factor({ y: y, m: m, d: d }, f);
		},
		sum: function (a, b) {
			a.d += b.d;
			a.m += b.m;
			a.y += b.y;
		},
		round: function (a) {
			var mx = a.m - Math.floor(a.m);
			var yx = a.y - Math.floor(a.y);

			if (mx > 0) {
				a.d += mx * 30;
			}
			if (yx > 0) {
				a.m += yx * 12;
			}

			a.d = Math.floor(a.d);
			a.m = Math.floor(a.m);
			a.y = Math.floor(a.y);

			if (a.d >= 30) {
				a.m += ~~(a.d / 30);
				a.d = ~~(a.d % 30);
			}
			if (a.m >= 12) {
				a.y += ~~(a.m / 12);
				a.m = ~~(a.m % 12);
			}
		}
	};
});