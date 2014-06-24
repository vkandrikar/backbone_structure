define( ['backbone', 'template!templates/default/404'], 
	function(Backbone, DefaultTemplate){
		var DefaultPage = Backbone.View.extend({
	
			el: '#pageCont',
			
			render: function () {
				this.$el.html(DefaultTemplate);
			}
		});
	
		return DefaultPage;
});
