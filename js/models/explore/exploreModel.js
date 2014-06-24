define(['backbone','globals'], function(Backbone,_g) {

    var ExploreModel = Backbone.Model.extend({
    	url: function()
    	{
    		return _g.mapDataJSON;
    	},

    	parse:function(response)
    	{
            
    		return response.Data.Explore
    	}
    });

    return ExploreModel;

});
