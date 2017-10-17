(function(){
	var app = angular.module('tasty');

	app.controller('HomeController', function ($scope, $http) {

        //Gather dishes in style
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


        //////////////// ADD NEW DISH ///////////////

        $scope.addNewDish = function (data) {

            var newDish = {
                'name': data.dishName,
                'img': data.dishImg,
                'price': data.dishPrice
            }

            var onPostCompleted = function (res) {
                //Is NOT necessary at the moment
                //redirect to any link to make the home page reload
                //$location.path('/reload');
            };
            var onPostError = function (err) {
                $scope.error = "Could not add new dish, error: " + err.message;
            };

            $http.post(location.origin + "/dishes/", newDish)
                .then(onPostCompleted, onPostError);
        };


        //////////////// DELETE DISH ///////////////
        $scope.deleteDish = function (_id) {

            // Pop up a confirmation dialog
            var confirmation = confirm('Are you sure you want to delete this dish?');

            // Check and make sure the user confirmed
            if (confirmation === true) {

                // If they did, do our delete
                var onDeleteCompleted = function (res) {
                    loadDishes();
                };
                var onDeleteError = function (err) {
                    alert("Could not delete the dish from the list, error: " + response.msg);
                };

                $http.delete(location.origin + "/dishes/" + _id)
                    .then(onDeleteCompleted, onDeleteError);
            }
            else {

                // If they said no to the confirm, do nothing
                return false;
            }
        };
	});
}());