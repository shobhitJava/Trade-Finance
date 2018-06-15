(function() {
	angular.module("mnpApp").controller("landingCntrl", landingCntrl);

	landingCntrl.$inject = [ '$scope' ];

	function landingCntrl($scope) {
		$scope.hello = "sdfsd";
		console.log("loading landing .. ");
	}

})();