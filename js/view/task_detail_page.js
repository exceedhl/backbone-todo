define(['underscore', 'backbone', 'model/todo_list', "view/todo_layout", "view/todo/detail"], function(_, Backbone, TodoList, TodoLayout, TaskDetailView) {
    var TaskDetailPage = Backbone.View.extend({
		
	initialize: function() {
	    this.layout = new TodoLayout({todoList: this.options.todoList});
	    var that = this;
	    this.layout.addView('#edit-task', new TaskDetailView({todoList: this.options.todoList, cid: this.options.cid})).
		afterShow(function() {
		    that.layout.$("#tasks").removeClass("span10").addClass("span6");
		    that.layout.$("#edit-task").hide().fadeIn();
		}).
		afterClose(function() {
		    that.layout.$("#tasks").removeClass("span6").addClass("span10");
		});
	},
	
	show: function() {
	    this.layout.render().show();
	    return this;
	},

	close: function() {
	    this.layout.close();
	}
    });

    return TaskDetailPage;
});