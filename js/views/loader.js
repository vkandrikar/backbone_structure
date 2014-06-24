define(['jquery', 'backbone', 'events'], 
	function($, Backbone, Events){
		'use strict';
		
		var Loader = Backbone.View.extend({
	
			events: {				
			}, //end of events
			
			initialize: function () {
				Events.on('viewCreated', this.viewCreated, this);
			}, //end of initialize funt
	
			viewCreated: function () {
				this.hide();
			}, //end of viewCreated funt
			
			show: function (e) {
				this.$el.show();
			}, //end of show funt
			
			hide: function(e) {
				this.$el.hide();
			}, //end of hide funt
			
			render: function () {
				this.$el.html('<img class="loaderImg" src="images/loader.gif">');
			} //end of render funt
			
		});
	
		return Loader;	
	}//end of define funt
);
