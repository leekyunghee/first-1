/**
 * 
 */
var User = Backbone.Model.extend({
// url : "",
	// Default attributes for the user item.
	defaults : {
		id : '',
		firstName : '',
		lastName : '',
		email : ''
	}
});

var UserList = Backbone.Collection.extend({
	// Reference to this collection's model.
	model : User,
	// Save all of the user items under the `"user-backbone"` namespace.
	localStorage : new Backbone.LocalStorage("user-backbone")
});

var Users = new UserList;
