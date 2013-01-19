define(['underscore', 'backbone', 'model/todo', "text!template/todo/detail.html"], function(_, Backbone, Todo, taskDetailTemplate) {
    var TaskDetailView = Backbone.View.extend({
	tagName: "form",

	initialize: function() {
	    this.todoList = this.options.todoList;
	    this.todo = this.todoList.get(this.options.cid);
	    console.log(this.todo);
	},

	render: function() {
	    var compiledTemplate = _.template(taskDetailTemplate, {todo: this.todo});
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

    TaskDetailView.getCachedView = function(options) {
	if (view == null) {
	    view = new TaskDetailView(options);
	}
	return view;
    };

    return TaskDetailView;
});
