/**
 * 
 */
var UserView = Backbone.View.extend({
	tagName : 'tr',
	template : _.template($('#user-template').html()),
	initialize : function() {
		console.log("UserView initialize");
		this.listenTo(this.model, 'change', this.render);
	},
	render : function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var UserListView = Backbone.View.extend({
	el: $("#userapp"),
	initialize : function() {
		console.log("UserListView initialize");
		this.listenTo(Users, 'add', this.addOne);
		this.listenTo(Users, 'reset', this.addAll);
		this.listenTo(Users, 'all', this.render);
	},
	render : function() {

	},
	addOne : function() {
		console.log("UserListView.addOne");
		var userView = new UserView({model:user});
		this.$("#user-list").append(userView.render().el);
	},
	addAll : function() {
		Users.each(this.addOne, this);
	}
});

console.log("test start");
var UserList = new UserListView;
var user = new User({id: 'idess', firstName:'yanggon', lastName:'moon', email:'aaa'});
console.log("user add");
Users.add(user);
console.log("user add end");

console.log("test end");