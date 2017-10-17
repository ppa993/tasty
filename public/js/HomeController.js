(function(){
	var app = angular.module('tasty');

	app.controller('HomeController', function ($scope, $http) {

        ///////// GATHER DISHES IN STYLE /////////
		$scope.onRendered = function () {
			masonryBuild();
        }


        //////////////// DISH LIST ///////////////

        var loadDishes = function () {

            var onGetListCompleted = function (response) {
                $scope.dishes = response.data;
            };

            var onGetListError = function (err) {
                $scope.error = "Could not retrieve the dish list, error: " + err.message;
            };

            $http.get(location.origin + "/dishes/")
                .then(onGetListCompleted, onGetListError);
        }

        // Load list of dish on page load
        loadDishes();
	});
}());