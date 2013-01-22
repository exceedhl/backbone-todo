require.config({
    paths: {
	bootstrap: 'lib/bootstrap.css/js/bootstrap',
	jquery: 'lib/jquery/jquery',
	underscore: 'lib/underscore-amd/underscore',
	backbone: 'lib/backbone-amd/backbone',
	parsley: 'lib/parsleyjs/parsley'
    },
    shim: {
	"bootstrap": {
	    deps: ["jquery"]
	},
	"parsley": {
	    deps: ['jquery']
	}
    }
});

require([
    'backbone',
    'router',
    'bootstrap',
    'parsley',
    'test/backbone-local'
], function(Backbone, router) {
    
});
