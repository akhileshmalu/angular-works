(function() {

	var ContactApp = angular.module("ContactApp");
	ContactApp.controller("HeadCtrl", HeadCtrl);

	// Header Controller consumes factory service
	function HeadCtrl(AppDataService) {
		this.titleName = AppDataService.name;
	}
})();