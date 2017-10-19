(function () {
    var app = angular.module('tasty');
    
    app.controller('DetailsController', function ($scope, $http, $routeParams) {

        //////////////// DISH DETAIL ///////////////
        
            var onGetDishCompleted = function (response) {
                $scope.dish = response.data[0];
            };

            var onGetDishError = function (err) {
                $scope.error = "Could not retrieve the dish detail, error: " + err.message;
            };

            $http.get(location.origin + "/api/dishes/" + $routeParams.id)
                .then(onGetDishCompleted, onGetDishError);
        
    })
})();
