define( ['jquery', 'backbone', 'core', 'events', 'template!templates/layout', 'globals'], 
	function ($, Backbone, Core, Events, LayoutTemplate, Globals) {
		'use strict';
		
		var applicationView = Backbone.View.extend ({
			el: '#applicationCont',
						
			events: { 
        	}, //end of events
			
			initialize: function () {
				/* ==========================================================================
				GLOBAL AJAX SETUP
				========================================================================== */
				/*$.ajaxSetup({
					async: false,
					type: "POST",
					contentType: "json; charset=utf-8"
				});*/
			}, //end of initialize funt
			
			pageChanged:function (argument) {
				//console.log("pageChanged:" + argument);
				this.headerView.setActiveNavHeader(argument);
			}, //end of pageChanged funt
			
			render: function () {
				var self = this;				
				self.$el.html(LayoutTemplate);
				
				console.log("App Name: " + Globals.appName);
				console.log("App Version: " + Globals.appVersion);
				
				requirejs( ['views/header/headerView'],
					function (HeaderView) {
						self.headerView = Core.create(self, "HeaderView", HeaderView);
					}
				);
				
				requirejs( ['views/footer/footerView'],
					function (FooterView) {						
						//	Pass the appView down into the footer so we can render the visualisation						
						self.footerView = Core.create(self, 'FooterView', FooterView, {applicationView: self});
					}				
				);
			} //end of render funt
			
		});
		
		return applicationView;
	}//end of define funt
);
