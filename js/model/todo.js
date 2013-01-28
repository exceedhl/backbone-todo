define(['underscore', 'backbone', 'backbone-relational'], function(_, Backbone) {
    var Todo = Backbone.RelationalModel.extend({
	modelName: "todo",
	
	defaults: {
	    "name" : "",
	    "desc" : "",
	    "done" : false,
	    "owner" : "",
	    "dueDate" : "",
	    "project" : null
	},

	toggleDone: function() {
	    this.set("done", !this.get("done"));
	}
    });
    return Todo;
});
