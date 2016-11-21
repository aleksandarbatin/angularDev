	// dependencies

var myApp = angular.module("root", ["services"]);
    myApp.controller("index", ["$scope","hint", function($scope,hint) {
    	var employees = [
	    	{
			name: "Pera",
	    	forName: "Peric",
	    	birthYear: "1859"
	    	}, 

	    	{
			name: "Zika",
	    	forName: "Lazic",
	    	birthYear: "1955"
	    	}
		];

		$scope.employees = employees;

		var tech = [
	    	{name:"C#", likes: 0, dislikes: 0},
	    	{name:"ASP.NET", likes: 0, dislikes: 0},
	    	{name:"SQL Server", likes: 0, dislikes: 0},
	    	{name:"AngularJS", likes: 0, dislikes: 0}
    	];

    	$scope.tech = tech; 
    	$scope.plusLikes = 	function(tech){
    		tech.likes++;	
    	}

    	$scope.plusDislikes = 	function(tech){
    		tech.dislikes++;	
    	}
		
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
