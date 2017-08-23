	var myModule = angular.module("myClock",[]);
	myModule.controller("myControl", showTime);

	function showTime() {

		var today = new Date();
		this.currentTime = today.toTimeString();

		this.updateTime  = function() {
			var today = new Date();
			this.currentTime = today.toTimeString();
		};
	}