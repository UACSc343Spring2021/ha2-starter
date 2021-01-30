// YOUR CODE HERE

// This is the makeSignaller function as discussed in class
// Do not change this function
var makeSignaller = function() {
    var _subscribers = []; // Private member

    // Return the object that's created
    return {
	// Register a function with the notification system
	add: function(handlerFunction) { _subscribers.push(handlerFunction); },

	// Loop through all registered functions and call them with passed
	// arguments
	notify: function(args) {
	    for (var i = 0; i < _subscribers.length; i++) {
		_subscribers[i](args);
	    }
	}
    };
}


// makes the model for the day planner system
//
var makeModel = function() {
    // YOUR CODE HERE




// Make a single priority control button. Clicking this button
// should change the priority for subsequent appointment additions
//
// btnId - the Id of the element of this button
// priority - the priority associated with this button
//
var makePriorityControl = function(btnId, priority) {
    // YOUR CODE HERE



// Make a single clear items button. Clicking this button should 
// delete all items in the day planner.
//
// btnId - the Id of the element of this button
//
var makeClearControl = function(btnId) {
    // YOUR CODE HERE
    

}

// Make a set of controls to add items to the daily planner.
//
// model - a reference to the model
// titleId - the Id of the element that takes the appointment title
// hourId - the Id of the element that takes the hour of the event 
// detailId - the Id of the element that takes the item detaill
// btnId - the Id of the element that when clicked will add the appointmennt
//
var makeAddControls = function(model, titleId, hourId, detailId, btnId) {
    // YOUR CODE HERE
   

}

// Make a view showing all items in the appointment list and handling interactions
// directly with that list
//
// model - a reference to the model
// viewId - the Id of the element holding the daily schedule, expected to be a div
//
var makeScheduleView = function(model, viewId) {
    // YOUR CODE HERE

}


// Make a view showing the details of a single appointment.
//
// model - a reference to the model
// detailDivId - Id of div where detail view should go
var makeDetailView = function(model, detailDivId) {
    // YOUR CODE HERE
    

}


// the controller for the MVC setup
//
// model - a reference to the model
//
var makeController = function(model) {
  // YOUR CODE HERE
 

}

// Create your MVC system here once the DOM Content is loaded
//
document.addEventListener("DOMContentLoaded", function(event) {
    // YOUR CODE HERE
  

});
