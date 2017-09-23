(function() {

	var ContactApp = angular.module("ContactApp");

	ContactApp.controller("ContactCtrl", ContactCtrl);

	// Contact Controller
	function ContactCtrl(contactDataSvc) {
		
		var self = this;
		contactDataSvc.getContactData()
		.then(function(data) {
			self.contacts = data;
		});

		this.selectContact = function(i) {
			this.selectedContact = this.contacts[i];
			
			this.messageDisplay = undefined;
			this.errorDisplay = undefined;	

			// User clicks on other contact while flagging edit for first
			this.editMode = false;
			this.editCaption = "Edit";

		};

		this.editCaption = "Edit";

		this.editMode = false;

		this.addMode = false;

		this.addContact = function() {
			
			this.togleEdit();

		}

		

		this.togleEdit = function() {

			this.messageDisplay = undefined;
			this.errorDisplay = undefined;

			this.editMode = !this.editMode;

			// toggle caption on button
			if(this.editCaption == "Edit") {
				
				this.editCaption = "Save";
				
			} else {

				this.editCaption = "Edit";

				if(this.addMode) {
					this.selectedContact.id = new Date().toTimeString();
					
					contactDataSvc.createContact(this.selectedContact)
					.then(
						function() {
							self.messageDisplay = "Data Successfully Changed";						
						},
						function() {
							self.errorDisplay = "There was an error. Please try again later.";		
						}
					);
				} else {

					contactDataSvc.saveContact(this.selectedContact)
					.then(
						function() {
							self.messageDisplay = "Data Successfully Changed";						
						},
						function() {
							self.errorDisplay = "There was an error. Please try again later.";		
						}
					);
				}	
			}
		}
	}
})();
