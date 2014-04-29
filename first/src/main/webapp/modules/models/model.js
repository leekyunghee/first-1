(function($) {
	/**
	 * Model 
	 */
	var User = Backbone.Model.extend({
	// urlRoot : '',
	// 모델 객체의 기본값을 지정
		defaults : {
			id : '',
			name : '',
			email : '',
			regdate : ''
		},
		// id(PK)값 선언 : 모델을 동적으로 수정하기 위함(insert, update시 필요) 
		idAttribute : '', 
		// 초기화 
		initialize: function(){
			console.log("Model initialize()");
		}
	});
	/**
	 * Collection 
	 */
	var UserCollection = Backbone.Collection.extend({
		// 모델 객체를 참조 
		model : User,
		// API URL
		url: '/account/',
		// 초기화 
		initialize: function(){
			console.log("EmpCollection initialize()");
		}
	});
	// 콜렉션 객체 생성 
	var userCollection = new UserCollection();
	
	// 네임스페이스 패턴 사용 
	window.module = {};
	window.module.model = {};
	window.module.collection = {};
	window.module.model.User = User;
	window.module.collection.UserCollection = UserCollection;
	
})(jQuery);
