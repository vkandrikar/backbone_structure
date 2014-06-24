define(['backbone', 'template!templates/header/page', 'events'],
	function(Backbone, HeaderTemplate, Events){
		'use strict';
	
		var headerView = Backbone.View.extend({
	
			el: '#layoutHeader',
	
			initialize: function() {
				this.prevSelectedPage = null;
				Events.trigger('onHeaderViewLoaded');
			}, //end of initialize funt
	
			events: {
				"click li a[class='activeHeaderNav']": "handlePageNavigation"
			}, //end of events
			
			handlePageNavigation: function (evt) {			
				Events.trigger('pageNavigationStart');
			}, //end of handlePageNavigation funt
			
			setActiveNavHeader: function (page) {
				if (this.prevSelectedPage != null) {
					this.prevSelectedPage.removeClass( "deactiveHeaderNav" ).addClass( "activeHeaderNav" );
				} 
				
				var li = $('#'+page).find('a');			
				$(li).removeClass( "activeHeaderNav" ).addClass( "deactiveHeaderNav" );
				this.prevSelectedPage = li;
			}, //end of setActiveNavHeader funt
	
			render: function () {
				this.$el.html(HeaderTemplate);
			} //end of render funt
		});
	
		return headerView;
	}//end of define funt
);
