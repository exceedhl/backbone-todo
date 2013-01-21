define(['underscore', 'backbone', 'model/todo_list', "view/todo/new"], function(_, Backbone, TodoList, NewTodoView) {
    var TodoLayout = Backbone.View.extend({
	
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
	
	addSubView: function(view) {
	    this.subViews.push(view);
	    return this;
	},

	initialize: function() {
	    this.subViews = [];
	    this.afterShowHooks = [];
	    this.afterCloseHooks = [];
	},
	
	render: function() {
	    _.each(this.subViews, function(view) {
		view.render();
	    });
	    return this;
	},
	
	afterShow: function(fn) {
	    this.afterShowHooks.push(fn);
	    return this;
	},

	show: function() {
	    _.each(this.subViews, function(view) {
		view.show();
	    });
	    _.each(this.afterShowHooks, function(fn) {
		fn.call(this);
	    });
	    return this;
	},

	afterClose: function(fn) {
	    this.afterCloseHooks.push(fn);
	    return this;
	},

	close: function() {
	    _.each(this.subViews, function(view) {
		view.close();
	    });
	    this.subViews = null;

	    this.undelegateEvents();
	    this.off();
	    _.each(this.afterCloseHooks, function(fn) {
		fn.call(this);
	    });
	}
    });

    return TodoLayout;
});
