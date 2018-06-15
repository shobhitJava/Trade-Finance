(function() {
	'use strict', angular.module('mnpApp')
			.factory('HttpServices', HttpServices);

	HttpServices.$inject = [ '$http', '$q', '$rootScope' ];

	function HttpServices($http, $q, $rootScope) {

		var service = {};
		service.getData = getData;
		service.putData = putData;
		service.postData = postData;
		service.deleteData = deleteData;
		return service;

		/**
		 * @description REST GET call
		 * @param {url}
		 *            url of end point
		 * @param {date}
		 *            request body
		 * @param {url}
		 *            request headers
		 */
		function getData(context, data, headers) {
			var url = Constants.PROTOCOL + $rootScope.ipPort + context;
			var deferred = $q.defer();
			var req = {
				method : 'GET',
				url : url,
				headers : headers,
				data : data
			}

			console.log("Request : " + angular.toJson(req));

			$http(req).success(function(data, status) {
				if (status == 200 || status == 202) {
					deferred.resolve({
						success : true,
						httpStatus : status,
						appData : data
					});
				} else {
					deferred.resolve({
						success : false,
						httpStatus : status,
						appData : data
					});
				}

			}).error(function(data, status) {
				deferred.resolve({
					success : false,
					httpStatus : status
				});
			});

			return deferred.promise;
		}

		/**
		 * @description REST PUT call
		 * @param {url}
		 *            url of end point
		 * @param {date}
		 *            request body
		 * @param {url}
		 *            request headers
		 */
		function putData(context, data, headers) {

			var url = Constants.PROTOCOL + $rootScope.ipPort + context;
			var deferred = $q.defer();

			var reqBodyData = {};
			reqBodyData.appData = data;

			var req = {
				method : 'PUT',
				url : url,
				headers : headers,
				data : reqBodyData
			}
			
			console.log("Request : " + angular.toJson(req));

			$http(req).success(function(data, status) {
				if (status == 200 || status == 202) {
					deferred.resolve({
						success : true,
						httpStatus : status,
						appData : data
					});
				} else {
					deferred.resolve({
						success : false,
						httpStatus : status,
						appData : data
					});
				}

			}).error(function(data, status) {
				deferred.resolve({
					success : false,
					httpStatus : status
				});
			});

			return deferred.promise;
		}

		/**
		 * @description REST POST call
		 * @param {url}
		 *            url of end point
		 * @param {date}
		 *            request body
		 * @param {url}
		 *            request headers
		 */
		function postData(context, data, headers) {
			
			var url = Constants.PROTOCOL + $rootScope.ipPort + context;
			var deferred = $q.defer();

			var reqBodyData = {};
			reqBodyData.appData = data;

			var req = {
				method : 'POST',
				url : url,
				headers : headers,
				data : reqBodyData
			}
			
			console.log("Request : " + angular.toJson(req));

			$http(req).success(function(data, status) {
				if (status == 200 || status == 202) {
					deferred.resolve({
						success : true,
						httpStatus : status,
						appData : data
					});
				} else {
					deferred.resolve({
						success : false,
						httpStatus : status,
						appData : data
					});
				}

			}).error(function(data, status) {
				deferred.resolve({
					success : false,
					httpStatus : status
				});
			});

			return deferred.promise;
		}

		/**
		 * @description REST DELETE call
		 * @param {url}
		 *            url of end point
		 * @param {date}
		 *            request body
		 * @param {url}
		 *            request headers
		 */
		function deleteData(context, data, headers) {
			var url = Constants.PROTOCOL + $rootScope.ipPort + context;
			var deferred = $q.defer();

			var reqBodyData = {};
			reqBodyData.appData = data;

			var req = {
				method : 'DELETE',
				url : url,
				headers : headers,
				data : reqBodyData
			}
			
			console.log("Request : " + angular.toJson(req));

			$http(req).success(function(data, status) {
				if (status == 200 || status == 202) {
					deferred.resolve({
						success : true,
						httpStatus : status,
						appData : data
					});
				} else {
					deferred.resolve({
						success : false,
						httpStatus : status,
						appData : data
					});
				}

			}).error(function(data, status) {
				deferred.resolve({
					success : false,
					httpStatus : status
				});
			});

			return deferred.promise;
		}

	}

})();
