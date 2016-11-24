	// dependencies

var myApp = angular.module("root", ["services"]); 
	
	// MAIN MODULE

	//The angular.module is a global place for creating, registering and retrieving Angular modules. 
	//All modules (angular core or 3rd party) that should be available to an application must 
	//be registered using this mechanism.
	//A module is a collection of services, directives, controllers, filters, 
	//and configuration information. angular.module is used to configure the $injector.

    myApp.controller("index", ["$scope", "hint", function($scope,hint) {

    	//In Angular, a Controller is defined by a JavaScript constructor function that is used to augment the Angular Scope.

    		//Setting up the initial state of a $scope object
		//Typically, when you create an application you need to set up the initial state for the Angular $scope. 
		//You set up the initial state of a scope by attaching properties to the $scope object. The properties contain 
		//the view model (the model that will be presented by the view). All the $scope properties will be available 
		//to the template at the point in the DOM where the Controller is registered.

		//The following example demonstrates creating a GreetingController, which attaches a greeting property containing 
		//the string 'Hola!' to the $scope:

		// var myApp = angular.module('myApp',[]);

		// myApp.controller('GreetingController', ['$scope', function($scope) {
		//   $scope.greeting = 'Hola!';
		// }]);
		//We create an Angular Module, myApp, for our application. Then we add the controller's constructor function to the module 
		//using the .controller() method. This keeps the controller's constructor function out of the global scope.
    	
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

    	var employees = [
	    	{name: "Pera", forName: "Peric", birthYear: "1859"}, 
	    	{name: "Zika", forName: "Lazic", birthYear: "1955"}
		];

		$scope.employees = employees;

		var workers = [
			{name: "Justina", dateofBirth: new Date("August 20, 1989"), gender: "Female", salary: 755055.859434},
			{name: "Stefan", dateofBirth: new Date("Novembar 19, 1989"), gender: "Male", salary: 600055.85},
			{name: "Alek", dateofBirth: new Date("January 21, 1982"), gender: "Male", salary: 210000.85},
			{name: "Milena", dateofBirth: new Date("October 22, 1990"), gender: "Female", salary: 755055.85},
			{name: "Gavrilo", dateofBirth: new Date("December 26, 1990"), gender: "Male", salary: 665055.85},
		]

		var dogs = [
			{name: "Badu", breed: "Labrador", gender: "Male", years: 4.5},
			{name: "Kuki", breed: "Labrador", gender: "Male", years: 10},
			{name: "Besi", breed: "Bernese Mountain", gender: "Female", years: 4.5},
			{name: "Tina", breed: "New Faundler", gender: "Female", years: 4.5},
			{name: "Atos", breed: "mixed blood", gender: "Male", years: undefined},
		]

		$scope.dogs = dogs;
		$scope.dogsView = "DogsTable.html";

		$scope.workers = workers;
		$scope.rowLimit = 3;
		$scope.sortColumn = "name";
		$scope.reverseSort = false;

		$scope.sortData = function(column) {
			$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort: false;
		}

		$scope.getSortClass = function(column) {
			if($scope.sortColumn == column) {
				return $scope.reverseSort ? 'arrowDown' : 'arrowUp';
			}
		}

		var tech = [
	    	{name:"C#", likes: 0, dislikes: 0},
	    	{name:"ASP.NET", likes: 0, dislikes: 0},
	    	{name:"SQL Server", likes: 0, dislikes: 0},
	    	{name:"AngularJS", likes: 0, dislikes: 0}
    	];

    	$scope.tech = tech; 

    	$scope.plusLikes = 	function(techno){
    		techno.likes++;	
    	}

    	$scope.plusDislikes = 	function(techno){
    		techno.dislikes++;	
    	}


		
        
    }]);

    

    // value

angular.module("services", [])
    .value("hint", "Hint message!");
