define(['underscore', 'backbone'], function(_, Backbone) {
    var Todo = Backbone.Model.extend({
	defaults: {
	    "name" : "",
	    "desc" : "",
	    "done" : false
	}
    });
    return Todo;
});
