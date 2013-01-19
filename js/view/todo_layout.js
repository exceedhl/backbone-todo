define(['underscore', 'backbone', 'model/todo_list', "view/todo/new", 'view/todo/list'], function(_, Backbone, TodoList, NewTodoView, ListTodoView) {
    var TodoLayout = Backbone.View.extend({
	
	el: $("body"),
	events: {
	    "click #add-task" : "showForm"
	},
	
	showForm: function() {
	    this.newView = new NewTodoView({todoList: this.options.todoList});
	    this.$('#new-task').html(this.newView.render().el).hide().slideDown();
	},
	
	addView: function(selector, view) {
	    if (this.subViews[selector]) {
		this.subViews[selector].close();
	    }
	    this.subViews[selector] = view;
	    return this;
	},

	getView: function(selector) {
	    return this.subViews[selector];
	},
	
	initialize: function() {
	    this.subViews = {
		'#tasks': new ListTodoView({todoList: this.options.todoList})
	    };
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
	    var that = this;
	    _.each(this.subViews, function(view, selector) {
		this.$(selector).html(view.el);
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
	    this.undelegateEvents();
	    this.off();
	    _.each(this.afterCloseHooks, function(fn) {
		fn.call(this);
	    });
	}
    });

    return TodoLayout;
});
