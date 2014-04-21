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
		},
		// 조회 데이터 요청
		refreshData : function(param) {
			var p = param || {};
			this.fetch({
				url: this.url,
				async: false,
				data: JSON.stringify(p),
				type:        'POST',		// fetch는 backbone에서 GET방식 이므로 재정의 
				dataType:    'json',
				contentType: 'application/json',
				cache:       false,
				success:     this.success,
				error:       this.error,
				reset:	true
	        });	
		},
		success: function(data) {
			userCollection.reset();
			userCollection.set(data);
		},
		error: function(error){
			console.log("error = "+error);
		}
	});

	var userCollection = new UserCollection();
})(jQuery);
