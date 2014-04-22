(function($) {
var 	
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
		// id(PK)값 선언 : 모델을 동적으로 수정하기 위함 
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
		// 모델 
		model : User,
		// url 
		url: '/employee/addEmployee',
		// 초기화 
		initialize: function(){
			console.log("EmpCollection initialize()");
		}
	});
	// 콜렉션 객체 생성 
	var userCollection = new UserCollection();
})(jQuery);

// 네임스페이스 패턴 사용 
