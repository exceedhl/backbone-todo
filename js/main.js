require.config({
    paths: {
	bootstrap: 'lib/bootstrap.css/js/bootstrap',
	jquery: 'lib/jquery/jquery',
	underscore: 'lib/underscore-amd/underscore',
	backbone: 'lib/backbone-amd/backbone'
    },
    shim: {
	"bootstrap": {
	    deps: ["jquery"]
	}
	
    }
});

require([
    'backbone',
    'router',
    'bootstrap',
    'test/backbone-local'
], function(Backbone, router) {
    
});
