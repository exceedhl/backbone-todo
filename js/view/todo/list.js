define(['underscore', 'backbone', 'view/todo/list_item', 'view/todo/new', 'view/view', 'text!template/todo/list.html'], function(_, Backbone, ListTodoItemView, NewTodoView, View, listTodoTemplate) {
    var ListTodoView = View.extend({
	tagName: "div",
	$container: $('#container'),

	events: {
	    "click #add-task" : "showForm"
	},

	showForm: function() {
	    var newView = new NewTodoView({todoList: this.todos});
	    newView.afterShow(function() {
		this.$el.hide().slideDown();
	    }).beforeClose(function() {
		this.$el.slideUp();
	    });
	    newView.render().show();
	},

	
	initialize: function(){
	    this.callSuper('initialize');
            this.todos = this.options.todoList;
	    this.todos.on("add", this.renderTodos, this);
	},

	renderTodos: function() {
	    this.closeSubViews();
	    var that = this;
	    _.each(this.todos.models, function(todo) {
		var view = new ListTodoItemView({todo:todo});
		that.addSubView(view);
		that.$("tbody").append(view.render().el);
	    });
	},
	
	render: function(){
	    var compiledTemplate = _.template(listTodoTemplate);
	    this.$el.html(compiledTemplate); 
	    this.renderTodos();
            return this;
	},

	show: function() {
	    this.callSuper('show');
	    this.$container.append(this.el);
	    return this;
	},

	close: function() {
	    this.callSuper('close');
	    this.todos.off("add");
	    return this;
	}

	
    });
    
    return ListTodoView;
});
