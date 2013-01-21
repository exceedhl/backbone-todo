define(['underscore', 'backbone', 'view/todo/list_item', 'text!template/todo/list.html'], function(_, Backbone, ListTodoItemView, listTodoTemplate) {
    var ListTodoView = Backbone.View.extend({
	tagName: "table",
	className: "table table-hover",
	container: $('#tasks'),
	
	initialize: function(){
            this.todos = this.options.todoList;
	    this.todos.on("add", this.renderTodos, this);
	    this.subViews = [];
	    this.afterShowHooks = [];
	    this.afterCloseHooks = [];
	},

	renderTodos: function() {
	    _.each(this.subViews, function(view) {
		view.close();
	    });
	    this.subViews = [];
	    var that = this;
	    _.each(this.todos.models, function(todo) {
		var view = new ListTodoItemView({todo:todo});
		that.subViews.push(view);
		that.$("tbody").append(view.render().el);
	    });
	},
	
	render: function(){
	    var compiledTemplate = _.template(listTodoTemplate);
	    this.$el.html(compiledTemplate); 
	    this.renderTodos();
            return this;
	},

	afterShow: function(fn) {
	    this.afterShowHooks.push(fn);
	    return this;
	},

	show: function() {
	    this.container.html(this.el);
	    var that = this;
	    _.each(this.afterShowHooks, function(fn) {
		fn.call(that);
	    });
	},

	afterClose: function(fn) {
	    this.afterCloseHooks.push(fn);
	    return this;
	},

	close: function() {
	    _.each(this.subViews, function(view) {
		view.close();
	    });

	    this.todos.off("add");
	    this.off();
	    this.undelegateEvents();
	    this.remove();
	    var that = this;
	    _.each(this.afterCloseHooks, function(fn) {
		fn.call(that);
	    });
	    this.container = null;
	    this.subViews = null;
	    this.afterCloseHooks = null;
	    this.afterShowHooks = null;
	}

	
    });

    var view = null;

    ListTodoView.getCachedView = function(options) {
	if (view == null) {
	    view = new ListTodoView(options);
	}
	return view;
    };

    return ListTodoView;
});
