define(['underscore', 'backbone'], function(_, Backbone) {
    var Todo = Backbone.Model.extend({
	defaults: {
	    "name" : "",
	    "desc" : "",
	    "done" : false,
	    "owner" : "",
	    "dueDate" : ""
	},

	toggleDone: function() {
	    this.set("done", !this.get("done"));
	}
    });
    return Todo;
});
