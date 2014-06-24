define(['backbone', 'events', 'template!templates/footer/page'], 
	function(Backbone, Events, FooterTemplate){

    var footerView = Backbone.View.extend({

        el: '#layoutFooter',
		
		events: {
		},
		
		initialize: function () {
		},

        render: function () {
          	this.$el.html(FooterTemplate);
        }

    });

    return footerView;
});
