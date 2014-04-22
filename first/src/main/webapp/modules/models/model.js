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
		// id (PK) 값 선언 
		idAttribute : '', 
		initialize: function(){
			console.log("Model initialize()");
		}
	});
	/**
	 * Collection 
	 */
	var UserCollection = Backbone.Collection.extend({
		
		model : User,
		url: '/employee/addEmployee',
		initialize: function(){
			console.log("EmpCollection initialize()");
		}
	});
	// 콜렉션 객체 생성 
	var userCollection = new UserCollection();
})(jQuery);
