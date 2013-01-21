define(['underscore', 'backbone', 'view/todo/list_item', 'view/view', 'text!template/todo/list.html'], function(_, Backbone, ListTodoItemView, View, listTodoTemplate) {
    var ListTodoView = View.extend({
	tagName: "table",
	className: "table table-hover",
	container: $('#tasks'),
	
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
	    this.container.html(this.el);
	},

	close: function() {
	    this.callSuper('close');
	    this.todos.off("add");
	}

	
    });
    
    return ListTodoView;
});
