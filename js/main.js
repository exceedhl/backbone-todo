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
    'parsley',
    'test/backbone-local',
    'test/test-data'
], function(Backbone, router) {
    
});
