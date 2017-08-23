(function() {

	var ContactApp = angular.module("ContactApp");

	ContactApp.service("AppDataService", AppDataServiceMethod);

	// Implementation of service functoin defined above; Contructor mode initialization; Popular than factory;
	function AppDataServiceMethod() {
	this.name  = "My Contact Application Demo";
	this.author = "Akhilesh Maloo";
	this.Company = "Self Learning";
	this.built = new Date().toTimeString();
	}


})();