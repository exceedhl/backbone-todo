define(['underscore', 'backbone', 'model/todo_list', "view/todo_layout"], function(_, Backbone, TodoList, TodoLayout) {
    var ListTasksPage = Backbone.View.extend({
	
	initialize: function() {
	    this.layout = new TodoLayout({todoList: this.options.todoList});
	},
	
	show: function() {
	    this.layout.render().show();
	    return this;
	},

	close: function() {
	    this.layout.close();
	}
    });

    return ListTasksPage;
});
