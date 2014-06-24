define( ['backbone', 'template!templates/page2/page', 'events', 'globals'],
	function (Backbone, PageTemplate, Events, Globals) {
		'use strict';
		
		var page2View = Backbone.View.extend ( {
			el: "#pageCont",
		
			events: {
			},
			
			initialize: function () {
			},
			
			render: function () {
				this.$el.html(PageTemplate);
					
				if (Globals.userId == '') {
					console.info('user id is not found');
				} else {
					console.log('user id: ' + Globals.userId);
				}
			}
		});
		
		return page2View;		
	}//end of define funt
);