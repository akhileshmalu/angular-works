	var calcModule = angular.module("myCalc", []);

	calcModule.controller("calController", function(){


		this.pushButton = function(push) {
			this.exp = push;	
		};

		this.action = function() {
			switch(this.exp) {
				case "+" : this.result = this.num1 + this.num2;	
				break;

				case '-' : this.result = this.num1 - this.num2;	
				break;

				case '*' : this.result = this.num1 * this.num2;	
				break;

				case '/' : if(this.num2 > 0) { 
								this.result = this.num1 / this.num2;
							} else {
								this.result = 0;
							}
				break;
				default : this.result = 0;
			}
				
		}
	});