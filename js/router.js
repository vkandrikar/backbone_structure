define(['jquery', 'underscore', 'backbone', 'core', 'events', 'loader', 'globals'],
	function ($, _, Backbone, Core, Events, Loader, Globals) {
		'use strict';
		
		var appLoader;
	
		var AppRouter = Backbone.Router.extend({
			
			initialize: function () {
				Events.on('pageNavigationStart', this.startNavigatingPage, this);
			}, //end of initialize funt
	
			startNavigatingPage: function (navigationData) {
				appLoader.show();
				console.log("***navigatePage***");
				//this.navigate(navigationData.path, navigationData.options);
			}, //end of startNavigatingPage funt
	
			routes: {
				// Pages
				'': 'page1',
				'page1': 'page1',
				/*'page2': 'page2'*/			
				'page2(?*queryString)': 'page2',
				
				'*anything': 'defaultAction' // this must be last statment, otherwise it will exicute every time
			} //end of routes
			
		}); //end of router
	
		var initialize = function (options) {
			var appView = options.applicationView;
			var router = new AppRouter(options);
			appLoader = Core.create(appView, 'Loader', Loader,{el:'#backdrop'});
				  
			router.on('route:page1', function (param) {
				requirejs(['views/page1/page1View'], function (Page1View) {
					appView.pageChanged('page1');
					var page1View = Core.create(appView, 'Page1View', Page1View);
				});       
			}); //end of on
			
			router.on('route:page2', function (param) {						
				if (param) {
					/*var page2UserId = param.split('userId=')[1];
					if (page2UserId !== undefined)
						Globals.userId = page2UserId;*/
						
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
						
				requirejs(['views/page2/page2View'], function (Page2View) {
					appView.pageChanged('page2');
					var page2View = Core.create(appView, 'Page2View', Page2View);
				});
			}); //end of on
			
			router.on('route:defaultAction', function (param) {
				requirejs( ['views/default/defaultView'],
					function (DefaultView) {
						var defaultView = Core.create(appView, 'DefaultView', DefaultView);
					}
				);
			});
			
			Backbone.history.start();
		}; //end of initialize
		
		return {
			initialize: initialize
		};
	}//end of define funt
);
