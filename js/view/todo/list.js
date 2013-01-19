define(['underscore', 'backbone', 'text!template/todo/list.html'], function(_, Backbone, listTodoTemplate) {
    var ListTodoView = Backbone.View.extend({
	tagName: "table",
	className: "table table-hover",
	
	initialize: function(){
            this.todos = this.options.todoList;
	    this.todos.on("add", this.render, this);
	},
	
	render: function(){
	    var data = {
		todos: this.todos.models,
		_: _ 
	    };
	    var compiledTemplate = _.template(listTodoTemplate, data);
	    this.$el.html(compiledTemplate); 
            return this;
	},

	close: function() {
	    this.off();
	    this.undelegateEvents();
	    this.remove();
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
