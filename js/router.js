define(['jquery', 'events', 'globals', 'routie'], 
	function ($, Events, Globals) {
		'use strict';
				
		routie({
			'': function () {
				require(['views/page1/page1View'], function (Page1View) {
					var page1View = new Page1View();
					page1View.initialize();
					Events.dispatch( Events.PAGE_CHANGED, {page:'page1'} );
				});
			},
			
			'page1': function () {
				require(['views/page1/page1View'], function (Page1View) {
					var page1View = new Page1View();
					page1View.initialize();
					Events.dispatch( Events.PAGE_CHANGED, {page:'page1'} );
				});
			},
			
			'page2?*': function (param) {
				if (param) {
					var queryString = {};
					
					param.replace(
						new RegExp("([^?=&]+)(=([^&]*))?", "g"),
						function($0, $1, $2, $3) {queryString[$1] = $3; }
					);
					
					var page2UserId = queryString['userId'];					
					if (queryString['userId'] !== undefined)
						Globals.userId = queryString['userId'];
						
					if (queryString['appVersion'] !== undefined)
						Globals.appVersion = queryString['appVersion'];
				}
				
				require(['views/page2/page2View'], function (Page2View) {
					var page2View = new Page2View();
					page2View.initialize();
					Events.dispatch( Events.PAGE_CHANGED, {page:'page2'} );
				});
			}
		});		
	}
);
