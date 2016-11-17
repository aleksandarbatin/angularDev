	// dependencies

angular.module("root", ["services"])

.controller("index", ["$scope","hint", function($scope,hint) {
    $scope.favoriteWords;
    $scope.favoriteMeal;
    $scope.favoriteDrink;

    $scope.value = 1;
	$scope.isRed = function () { return $scope.value == 1; };
    $scope.isBlue = function () { return $scope.value == 2; };
    $scope.isYellow = function () { return $scope.value == 4; };
    $scope.isGreen = function () { return $scope.value == 3; };

    $scope.products = [
		{id: 1, name: "Hockey puck"},
		{id: 2, name: "Golf club"},
		{id: 3, name: "Baseball bat"},
		{id: 4, name: "Lacrosse stick"}
	];
	$scope.isFirstElementVisible = true;
	$scope.isSecondElementVisible = true;
	
	$scope.message = "Hello World";
	$scope.hint = hint;
}]);

    // value

angular.module("services", [])
    .value("hint", "Hint message!");
