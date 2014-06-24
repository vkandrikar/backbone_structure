define(['events'],
    function(Events){
		'use strict';
		
		var views = {},
			prevView = null;
	
		var create = function (context, name, View, options) {		
			console.log("***CORE***" + name);	
			
			if (prevView !== null) {
				if (typeof prevView.cleanView === 'function') {
					prevView.cleanView();
					prevView.undelegateEvents();	
				}
			}
			
			/*if(typeof views[name] !== 'undefined') {
				views[name].undelegateEvents();
				if(typeof views[name].clean === 'function') {
					views[name].clean();
				}
			}*/
			
			var view;
			if (views[name] === undefined) {
				if (typeof View === 'function')
					view = new View(options);
				else 
					view = View;
					
				views[name] = view;
			} else {
				view = views[name];
			}
	
			/*if(typeof context.children === 'undefined'){
				context.children = {};
				context.children[name] = view;
			} else {
				context.children[name] = view;
			}*/
	
			prevView = view;
			
			view.render();
			Events.trigger('viewCreated');
			return view;
			
		}; //end of create funt
	
		return {
			create: create
		};
	}//end of define funt
);
