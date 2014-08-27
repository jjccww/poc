angular.module('services.fullname', [])
.config(function() {})
.run(function() {})
.factory('FullNameService', function($q, $timeout) {
	var fullName = 'full name';
	return {
		get: function() {
			return fullName;
		},
		set: function(s) {
			fullName = s;
		}
	};
})
;