define(['underscore', 'backbone', 'model/todo_list', "view/todo/new", 'view/view'], function(_, Backbone, TodoList, NewTodoView, View) {
    var TodoLayout = View.extend({
	
	el: $("body"),
	events: {
	    "click #add-task" : "showForm"
	},
	
	showForm: function() {
	    var newView = new NewTodoView({todoList: this.options.todoList});
	    newView.afterShow(function() {
		this.container.hide().slideDown();
	    }).beforeClose(function() {
		this.container.slideUp();
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
	    this.closeSubViews();
	    this.undelegateEvents();
	    this.off();
	    this.subViews = null;
	}
    });

    return TodoLayout;
});
