(function($){
	/**
	 * 모델 하나의 row template을 컨트롤 함 
	 */
	var UserView = Backbone.View.extend({
		// 반복되는 엘리먼트의 tagName을 변경할 때는 필수로 선언해야함 
		tagName : 'tr',
		// 템플릿 선언 
		template : _.template($('#user-template').html()),
		// 이벤트 핸들러 등록
		events : {
		// {'eventName selector': 'callbackFunction'} 형태 
		},
		// 초기화 
		initialize : function() {
			console.log("UserView initialize");
			this.listenTo(this.model, 'change', this.render);	
		},

		render : function() {
			// 모델의 속성 값들을 복제 해서 리턴 : 템플릿에 담는다
			this.$el.html(this.template(this.model.toJSON())); 
			return this;
		}

	});
	
	/**
	 * 전체 레이아웃을 컨트롤 하는 UserListView 
	 */
	var UserListView = Backbone.View.extend({
		// 엘리먼트 : HTML의 Element에 View를 정의하기 위함
		el: $("#userapp"),
		// 초기화 
		initialize : function() {
			// 입력값이 있을 경우 
			//this.$input = this.$('#new-user');
			console.log("UserListView initialize");
			this.listenTo(Users, 'add', this.addOne);
			this.listenTo(Users, 'reset', this.addAll);
			this.listenTo(Users, 'all', this.render);
			// 서버로부터 데이터(read (GET)) 조회  
			Users.fetch();
		},

		render : function() {
			console.log("EmpListView render()");
			// 조회가 끝난 후 화면 refresh추가 
		},
		addOne : function(user) {
			console.log("UserListView.addOne");
			var userView = new UserView({model:user});
			this.$("#user-list tbody").append(userView.render().el);
		},
		addAll : function() {
			// 초기화 
			this.$('#user-list').html('');
			Users.each(this.addOne, this);
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
