define(['backbone','globals'], function(Backbone,_g) {

    var DiscoverModel = Backbone.Model.extend({
    	url: function()
    	{
    		return _g.dataDiscover;
    	},

    	parse:function(response)
    	{
    		return response.Discover;
    	}
    });

    return DiscoverModel;

});
