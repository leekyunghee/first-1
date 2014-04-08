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
	},
	events : {
		
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
		//Users.fetch();
	},
	addOne : function(user) {
		console.log("UserListView.addOne");
		var userView = new UserView({model:user});
		this.$("#user-list").append(userView.render().el);
	},
	addAll : function() {
		Users.each(this.addOne, this);
	},
	events : {
		
	}
});

var UserList = new UserListView;

console.log("user add");
var user1 = new User({id: 'idess111', firstName:'yanggon', lastName:'moon', email:'aaa'});
Users.add(user1);
var user2 = new User({id: 'idess', firstName:'yanggon', lastName:'moon', email:'aaa'});
Users.add(user2);
var user3 = new User({id: 'idess333', firstName:'yanggon', lastName:'moon', email:'aaa'});
Users.add(user3);
console.log("user add end");