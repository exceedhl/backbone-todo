define(['underscore', 'backbone', 'model/todo'], function(_, Backbone, Todo) {
    var TodoList = Backbone.Collection.extend({
	model: Todo
	
    });
    return TodoList;
});
