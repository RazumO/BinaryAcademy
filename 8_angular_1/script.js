var app = angular.module('app', []) 
	app.controller('myController', function($scope) {
		$scope.people = [{name: 'Liosha', age: 20, hometown: 'Lviv', avatar: 'img/1.png'}, {name: 'Vania', age: 17, hometown: 'Lviv', avatar: 'img/ava_web.png'},
		 {name: 'Vitia', age: 23, hometown: 'Lviv', avatar: 'img/Lviv.png'}];
		$scope.deletePerson = function(index) {
			$scope.people.splice(index, 1);
		}
		$scope.newUserName = "";
		$scope.newUserHometown = "";
		$scope.addUser = function () {
			$scope.people.push({name: $scope.newUserName, hometown: $scope.newUserHometown, age: $scope.getRandomNumber(14, 75).toFixed(), avatar: 'img/1.png'});
			$scope.newUserName = "";
			$scope.newUserHometown = "";
		}
		$scope.getRandomNumber = function (min, max) {
			return Math.random() * (max - min) + min;
		}
		$scope.showPeopleList = true;
		$scope.buttonTitle = "-";
		$scope.togglePeopleList = function () {
			$scope.showPeopleList = !$scope.showPeopleList;
			if ($scope.showPeopleList == false) {
				$scope.buttonTitle = "+";
			} else {
				$scope.buttonTitle = "-";
			}
		}
	});
	
	app.controller('productsController', function ($scope) {
		$scope.products = [{title: "Белый хлеб", price: 5}, {title: "Черный хлеб", price: 4.50}, { title: "Молоко Добряна", price: 10}, { title: "Масло подсолнечное", price: 24 }, { title: "Капуста зеленая", price: 8}];
		$scope.deleteProduct = function(index) {
			$scope.products.splice(index, 1);
		}
		$scope.newProductsTitle = "";
		$scope.addProduct = function () {
			$scope.products.push({title: $scope.newProductsTitle, price: $scope.getRandomNumber(4, 25).toFixed()});
			$scope.newUserTitle = "";
		}
		$scope.getRandomNumber = function (min, max) {
			return Math.random() * (max - min) + min;
		}
		$scope.showProductsList = true;
		$scope.buttonTitle = "-";
		$scope.toggleProductsList = function () {
			$scope.showProductsList = !$scope.showProductsList;
			if ($scope.showProductsList == false) {
				$scope.buttonTitle = "+";
			} else {
				$scope.buttonTitle = "-";
			}
		}
	});
