var navigationApp = angular.module("NavigationApp", []);

navigationApp.controller("navController", function() {

	this.menuList = ['Home', 'Contacts', 'Career', 'About us'];

	this.billingList = [ {title: 'Web Development', amount: 1000, selected: false},
						 {title: 'Full Stack Development', amount: 3000, selected: false},
						];

	this.selectedMenu = null;

	this.selectMe = function(item) {
		this.selectedMenu = item;
	},

	this.totalAmount = 0;

	this.selectBill = function(i,event) {
		this.billingList[i].selected = !this.billingList[i].selected;
		this.calculate();

		// background css
		$(event.target).toggleClass('active');
	},

	//total calculation of bills
	this.calculate = function() {
		var total = 0;
		this.billingList.forEach(function(bill) {
			if(bill.selected) {
				total += bill.amount; 
			}
		});
		this.totalAmount = total;
	}
		



});