/**
 * 
 */
var UserView = Backbone.View.extend({
	tagName : 'tr',
	template : _.template($('#user-template').html()),
	initialize : function() {
		console.log("UserView initialize");
	},
	render : function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	events : {
		
	}
});

var UserListView = Backbone.View.extend({
	el: $("#userapp"),
	initialize : function() {
		console.log("UserListView initialize");
	},
	render : function() {
		console.log("EmpListView render()");
		this.$el.html('');
		this.collection.refreshData();
		this.collection.each(function(emp){
			var userView = new UserView({model: user});
			this.$el.append(userView.render().el);
		}, this);
		return this;
	},
	events : {
		
	}
});

var userListView = new UserListView({collection: userCollection});
