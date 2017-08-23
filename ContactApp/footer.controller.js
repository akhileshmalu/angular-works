(function() {

	var ContactApp = angular.module("ContactApp");
	
	ContactApp.controller("FootCtrl", FootCtrl);

	// Footer Controller consumes factory service
	function FootCtrl(AppDataService) {
		this.author = AppDataService.author;
		this.built = AppDataService.built;
	}
	
})();