(function() {

	angular.module("mnpApp").controller("dashboardCntrl", dashboardCntrl);

	dashboardCntrl.$inject = [ '$location', '$rootScope', '$scope' ];

	function dashboardCntrl($location, $rootScope, $scope) {
		
		$scope.openModal=function(){
			console.log("In openmodal");
			
		}

	}
})();