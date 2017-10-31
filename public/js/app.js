(function () {
    var app = angular.module('tasty', ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "/views/home.html",
                controller: "HomeController"
            })
            .when('/about', {
                templateUrl: "/views/about.html"
            })
            .when('/contact', {
                templateUrl: "/views/contact.html",
                controller: "HomeController"
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
            .when('/manage', {
                templateUrl: "/views/manage.html",
                controller: "DishesController"
            })
            .otherwise({ redirectTo: '/' });

        // use the HTML5 History API, use this along with the base tag in index file
        $locationProvider.html5Mode(true);
    });
}());