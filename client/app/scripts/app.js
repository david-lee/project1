'use strict';

angular.module('project1App', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	// route for the home page
	.state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
			controller  : 'HeaderController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
			controller  : 'HomeController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
    	})
	// route for the aboutus page
        .state('app.aboutus', { 
		url:'aboutus', 
		views: { 
			'content@': { 
				templateUrl : 'views/aboutus.html' 
				} 
			} 
	})
	;

	$urlRouterProvider.otherwise('/');

    })
;


