requirejs.config({
    //The path where your JavaScripts are located
    baseUrl: 'js/',
	
	
	// to add module level css & we need to map css extension
	map: {
        '*': {
            'css': 'vendors/require/plugins/require-css/css'
        }
    },
		
	//paths config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
		/* List of libraries to be included in this architecture. */
        'jquery': 'vendors/jquery/jquery',
        'underscore': 'vendors/underscore/underscore',
        'backbone': 'vendors/backbone/backbone',
		
		'handlebars': 'vendors/handlebars/handlebars',
				
		/* List of [architecture based custom JavaScript] files to be loaded in this architecture. */
        'templates': '../templates',
		'template': 'utilities/handlebars-template-mapper',
		
		// List of Require.js plugins:
        'text': 'vendors/require/plugins/text',	
		
		
		//*****Custom JS******		
		'loader': 'views/loader',
		'globals': 'globals' 	
    }, //end of path
	
	/*
        shim config is part of `Require 2.0`_ and allows to Configure the dependencies
        and exports for older, traditional “browser globals” scripts that do not use
        define() to declare the dependencies and set a module value.
        See http://requirejs.org/docs/api.html#config-shim for more details.
    */
	shim: {
		backbone: {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'Handlebars'
        }
	} //end of shim	
	
});

// Start the main app logic.
requirejs(['views/application', 'router', 'core', 'globals', 'events'],
	function(ApplicationView, Router, Core, Globals, Events) {
		var param =  window.location.href.split('?')[1];
		console.log(param)
		if (param !== undefined) {
			var version = param.split('appVersion=')[1];
			if (version !== undefined)
				Globals.appVersion = version;
		}
		
    	var applicationView = Core.create({}, 'ApplicationView', ApplicationView);
		
		/*
			The router now has a copy of all main appview
		*/
		
		Events.once('onHeaderViewLoaded', function () {
			Router.initialize({applicationView: applicationView});
		});	
	}
);