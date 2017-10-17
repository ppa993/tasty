(function () {
    var app = angular.module('tasty', ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "/views/home.html",
                controller: "HomeController"
            })
            .when('/about', {
                templateUrl: "/views/about.html"
            })
            .when('/contact', {
                templateUrl: "/views/contact.html"
            })
            .when('/details/:id', {
                templateUrl: "/views/details.html",
                controller: "DetailsController"
            })
            .when('/services', {
                templateUrl: "/views/services.html"
            })
            .when('/components', {
                templateUrl: "/views/components.html"
            })
            .otherwise({redirectTo: '/'});
    });
}());