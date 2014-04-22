(function($){
	/**
	 * Model 
	 */
	var UserView = Backbone.View.extend({
		// 타겟 지정 
		tagName : 'tr',
		// 템플릿 선언 
		template : _.template($('#user-template').html()),
		// 초기화 
		initialize : function() {
			console.log("UserView initialize");
		},
		render : function() {
			this.$el.html(this.template(this.model.toJSON())); // 자신의 속성의 값들을 복제 해서 리턴
			return this;
		},
		// 이벤트 핸들러 등록
		events : {
		// {'eventName selector': 'callbackFunction'} 형태 
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
			this.collection.each(function(user){
				var userView = new UserView({model: user});
				this.$el.append(userView.render().el);
			}, this);
			return this;
		},
		// 이벤트 핸들러 등록
		events : {
		// {'eventName selector': 'callbackFunction'} 형태 
		}
	});

	var userListView = new UserListView({collection: userCollection});

	var UserRouter = Backbone.Router.extend({
		initialize: function(){
			console.log("UserRouter  initialize()");
		},
		routes: {
			'user/selectUserList': 'selectUserList'
		},
		selectEmployeeList: function(){
			console.log("UserRouter > selectUserList()");
			userListView.render();
		}
		});

		new UserRouter();
		Backbone.history.start();
})(jQuery);
