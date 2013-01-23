define(['underscore', 'backbone'], function(_, Backbone) {
    var Project = Backbone.Model.extend({
	modelName: "project",
	
	defaults: {
	    "name" : ""
	}
    });
    return Project;

});
