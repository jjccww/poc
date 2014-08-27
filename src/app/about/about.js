angular.module('app.about', [])
.config(function() {})
.run(function() {})
.controller('AboutCtrl', function($scope, FullNameService) {

	var getFullName = function() {
		$scope.fullName = FullNameService.get();
	};


	$scope.setFullName = function(s) {
		FullNameService.set(s);
		getFullName();
	};


	getFullName();



})
;