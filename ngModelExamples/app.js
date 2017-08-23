var module1 = angular.module("ngModelExamples", []);

module1.controller("ngModelExController", function(){

	this.showGreet = function() {
		var greet = document.getElementById("greet");
		greet.style.display = "block";
	}

})