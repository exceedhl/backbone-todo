require.config({
    paths: {
	bootstrap: 'lib/bootstrap.css/js/bootstrap',
	jquery: 'lib/jquery/jquery',
	underscore: 'lib/underscore-amd/underscore',
	backbone: 'lib/backbone-amd/backbone',
	'backbone-relational': 'lib/backbone-relational/backbone-relational',
	parsley: 'lib/parsleyjs/parsley'
    },
    shim: {
	"bootstrap": {
	    deps: ["jquery"]
	},
	"backbone_relational" : {
	    deps: ["underscore", "backbone"]
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
    'parsley'
], function(Backbone, router) {
    
});

require(['test/backbone-local']);

require(['test/test-data']);