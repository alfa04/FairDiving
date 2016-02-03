(function() {

    'use strict';

    // Creation of the app, named 'fairdiving'
    var app = angular.module('fairdiving', []);

    app.config(function($routeProvider, $locationProvider) {

        // Definition of the view routes
        $routeProvider
            .when('/', {
                controller: 'LandingCtrl',
                templateUrl: 'app/views/landing.ejs'
            })
            .otherwise({
                redirectTo: '/'
            });

        // Enabling HTML5 mode so that the URL doesn't show up with hashtags
        $locationProvider.html5Mode(true);

    });

}());
