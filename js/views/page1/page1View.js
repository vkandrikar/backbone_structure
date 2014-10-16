define( ['backbone', 'template!templates/page1/page', 'events', 'css!../../../css/modules/page1'],
	function (Backbone, PageTemplate, Events) {
		'use strict';
		
		var page1View = Backbone.View.extend ( {
			el: "#pageCont",
		
			events: {
				"click #test": "fnClickMe"
			}, //end of events
			
			initialize: function () {				
				console.log("page1 initialize");
				this.count = 0;
				this.testInterval;				
			}, //end of initialize funt
				
			fnClickMe: function (evt) {
				alert("fnClickMe");
			},	

			doSomething: function () {				
				var self = this;						
										
				this.testInterval = setInterval ( function () {
					console.log(self.count++);	
				}, 1000);
				
			}, //end of doSomething funt
			
			resetView: function () {				
				this.count = 0;				
			}, //end of resetView funt
			
			cleanView: function () {				
				//clean your view here
				clearInterval(this.testInterval);
				this.resetView();				
			}, //end of cleanView funt
			
			render: function () {				
				this.$el.html(PageTemplate);				
				this.doSomething();				
			} //end of render funt
		});
		
		var myView = new page1View();
		return myView;		
		//return page1View;		
	}//end of define funt
);