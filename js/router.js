define(["underscore", "backbone"], function(_, Backbone) {
    var router = null;

    var AppRouter = Backbone.Router.extend({
	routes : {
	},

	initialize: function() {
	    Backbone.history.start({pushState: false});
	}
    });

    AppRouter.getInstance = function() {
	if (router == null) {
	    router = new AppRouter();
	}
	return router;
    };


    return AppRouter.getInstance();
});

