define(['underscore', 'backbone', 'model/todo'], function(_, Backbone, Todo) {
    var TodoList = Backbone.Collection.extend({
	model: Todo,

	initialize: function() {
	    console.log("in todo list init");
	}
	
    });
    return TodoList;
});
