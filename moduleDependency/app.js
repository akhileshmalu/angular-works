var mainModuleApp = angular.module("mainModuleApp",["ngTagsInput"]);

mainModuleApp.controller("mainController", function() {
	this.tags = [
    { text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
  ];

});
