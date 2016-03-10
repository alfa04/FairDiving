(function() {

    'use strict';

    // Created the services related to packages
    var pkgServices = function($http, $q, $cookies, $window) {

        var deferred = $q.defer();

        this.getPackages = function() {

            return $http.get('/api/package')
                .success(function(res) {
                    deferred.resolve(res);
                })
                .error(function(err) {
                    deferred.reject(err);
                });
        };

        this.getPackageID = function(Id) {

            return $http.get('/api/package/' + Id)
                .success(function(res) {
                    deferred.resolve(res);
                })
                .error(function(err) {
                    deferred.reject(err);
                });
        };

        this.getPackagesOfLoggedUser = function() {

            return $http.get('/api/myPackages')
                .success(function(res) {
                    deferred.resolve(res);
                })
                .error(function(err) {
                    console.log(err);
                    deferred.reject(err);
                });
        };

        this.insertNewPackage = function(newPackage) {

            return $http.post('/api/package/', newPackage)
                .success(function(res) {
                    $window.location = '/package/' + res.id;
                    deferred.resolve(res);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

        };

        this.getCountries = function() {
            return $http.get('/api/countries')
                .success(function(res) {
                    deferred.resolve(res);
                })
                .error(function(err) {
                    deferred.reject(err);
                });
        };

    };

    this.insertNewReview = function(id, review) {

        return $http.post('/api/package/review/' + id, review)
            .success(function(res) {
                deferred.resolve(res);
            })
            .error(function(err) {
                deferred.reject(err);
            });

    };

    this.getReviews = function(id) {

        return $http.get('/api/package/' + id + 'reviews')
            .success(function(res) {
                deferred.resolve(res);
            })
            .error(function(err) {
                deferred.reject(err);
            });
    };

    // Injecting modules used for better minifing later on
    pkgServices.$inject = ['$http', '$q', '$cookies', '$window'];

    // Enabling the service in the app
    angular.module('fairdiving').service('pkgServices', pkgServices);

}());
