(function() {

	var app = angular.module("mnpApp", [ 'ngRoute', 'ui.bootstrap',
			'oc.lazyLoad', 'jcs-autoValidate', 'ngCookies' ]);

	app.config(config).run(run);

	config.$inject = [ '$routeProvider' ];

	function config($routeProvider) {

		$routeProvider
				.when(
						'/dashboard',
						{
							controller : 'dashboardCntrl',
							templateUrl : 'dashboard/page/dashboard.html',
							controllerAs : 'dashboardCntrl',
							resolve : {
								lazy : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([ {
														name : 'mnpApp',
														files : [ 'dashboard/controllers/dashboardController.js' ]
													} ]);
										} ]
							}
						})

				.when('/login', {
					controller : 'loginCntrl',
					templateUrl : 'loginView/page/login.html',
					controllerAs : 'loginCntrl'
				})

				.when('/landing', {
					controller : 'landingCntrl',
					templateUrl : 'landing/page/landing.html',
					controllerAs : 'landingCntrl'
				})

				.otherwise({
					redirectTo : '/landing'
				});
	}

	run.$inject = [ '$location', '$rootScope', '$http', '$cookieStore' ];

	function run($location, $rootScope, $http, $cookieStore) {

		$http.get("configuration.json").success(
				function(data) {

					$rootScope.ipPort = data.appConfiguration.ip + ":"
							+ data.appConfiguration.port;
					$rootScope.production = data.appConfiguration.production;

				}).error(function() {
			console.error('Not able to read configuration file properly');
		});

		$rootScope.globals = $cookieStore.get('globals') || {};

//		$rootScope.$on('$locationChangeStart',
//				function() {
//					// redirect to login page if not logged in and
//					// trying to
//					// access a restricted page
//					var restrictedPage = $.inArray($location.path(), [
//							'/login', '/landing' ]) === -1;
//					var loggedIn = $rootScope.globals.currentUser;
//					if (restrictedPage && !loggedIn) {
//						$location.path('/landing');
//					} else if (loggedIn) {
//						try {
//							var loginPage = $.inArray($location.path(),
//									[ '/login' ]) != -1;
//							if (loginPage) {
//								$location.path('/dashboard');
//							}
//						} catch (e) {
//							console.error(e);
//						}
//					}
//				});

	}

})();