(function() {

	var ContactApp = angular.module("ContactApp");

	ContactApp.service("contactDataSvc", function($http) {

		var self = this;

		self.getContactData = function() {

		var promise1 = $http.get("http://localhost:3000/contacts");
		var promise2 = promise1.then(function(response) {
			return response.data;
		});
		return promise2; 
		};

		this.saveContact = function(userData) {
			return $http.put("http://localhost:3000/contacts/"+userData.id, userData)
			.then(function(response) {
				console.log(response);
			});
		};

		this.createContact = function(userData) {
			return $http.put("http://localhost:3000/contacts", userData)
			.then(function(response) {
				console.log(response);
			});
		};



	});

})();