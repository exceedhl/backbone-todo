define(['underscore', 'backbone', 'model/todo_list', "view/todo/new", 'view/view'], function(_, Backbone, TodoList, NewTodoView, View) {
    var TodoLayout = View.extend({
	
	el: $("body"),
	events: {
	    "click #add-task" : "showForm"
	},
	
	showForm: function() {
	    var newView = new NewTodoView({todoList: this.options.todoList});
	    this.addSubView(newView);
	    newView.afterShow(function() {
		this.$el.hide().slideDown();
	    }).beforeClose(function() {
		this.$el.slideUp();
	    });
	    newView.render().show();
	},
	
	render: function() {
	    _.each(this.subViews, function(view) {
		view.render();
	    });
	    return this;
	},
	
	close: function() {
	    // don't remove
	}
    });

    return TodoLayout;
});
