	angular.module("toDoApp",[])
.controller("toDoController", mainController);

function mainController() {
	/*
	* edit button controlls ; toggling name and active/inactive
	*/
	this.editBtn = false;
	this.editCaption = "Edit";
	
	// keep track of last update on item
	this.changeCount = [];

	// master to do list
	this.toDoList = ['Learn Angular 1', 'Learn Angular 2'];

	// add to do function
	this.addItem = function() {
		this.toDoList.push(this.newToDo);
		this.newToDo = null;			
	}

	this.deleteItem = function (i) {
		this.toDoList.splice(i, 1);
	}

	// caption controll & Edit triggers and writting update on master to do list.
	this.editItem = function () {
		// toggle active / inactive boolean
		this.editBtn = !this.editBtn;
		
		// toggle caption on button
		if(this.editCaption == "Edit") {
			this.editCaption = "Done";
		} else {
			this.editCaption = "Edit";

			// save changes on particulat item on master to do list
			this.toDoList[this.changeCount.index] = this.changeCount.item;
		}
	}

	// record updated index and value of to do.
	this.update = function(value) {
		this.changeCount.index = value.$index;
		this.changeCount.item = value.item;
	}

}