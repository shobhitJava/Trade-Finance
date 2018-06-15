(function() {

	angular.module("mnpApp").controller("loginCntrl", loginCntrl);

	loginCntrl.$inject = [ '$location', '$rootScope', '$scope', 'HttpServices' ];

	function loginCntrl($location, $rootScope, $scope, HttpServices) {

		console.log("loginCntrl : ");

		$scope.registerSubscriber = function() {

			var contextUrl = Constants.CONTEXT_SUBSCRIBER_REGISTER;

			var headers = {
				mobile_no : $scope.mobileNumber
			};

			HttpServices.postData(contextUrl, null, headers).then(
					function(response) {
						
						if (response.success) {
							$location.path("/dashboard");
						}

						console.log("res : " + angular.toJson(response));

					});
		}

	}
})();