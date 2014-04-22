(function($){
	/**
	 * View 
	 */
	var UserView = Backbone.View.extend({
		// 기본값은 : div 
		// 반복되는 엘리먼트의 tagName을 변경할 때는 필수로 선언해야함 
		tagName : 'tr',
		// 템플릿 선언 
		template : _.template($('#user-template').html()),
		// 초기화 
		initialize : function() {
			console.log("UserView initialize");
		},
		// 화면 그리는 함수 
		render : function() {
			// 모델의 속성 값들을 복제 해서 리턴 : 템플릿에 담는다
			this.$el.html(this.template(this.model.toJSON())); 
			return this;
		},
		// 이벤트 핸들러 등록
		events : {
		// {'eventName selector': 'callbackFunction'} 형태 
		}
	});

	var UserListView = Backbone.View.extend({
		// 엘리먼트 : HTML의 Element에 View를 정의하기 위함
		el: $("#userapp"),
		// 초기화 
		initialize : function() {
			console.log("UserListView initialize");
			this.render();
		},
		// 화면 그리는 함수 
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

	// 뷰 객체 생성  
	var userListView = new UserListView({collection: userCollection});
	
	/**
	 * Router  
	 */
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
		
	// 네임스페이스 패턴 사용 
	window.module = {};
	window.module.view = {};
	window.module.view.UserView = UserView;
	window.module.view.UserListView = UserListView;	
	
})(jQuery);
