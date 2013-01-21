define(['underscore', 'backbone', 'model/todo_list', "view/todo_layout", "view/todo/detail", 'view/todo/list'], function(_, Backbone, TodoList, TodoLayout, TaskDetailView, ListTodoView) {
    var TaskDetailPage = Backbone.View.extend({
		
	initialize: function() {
	    this.layout = new TodoLayout({todoList: this.options.todoList});
	    var taskDetailView = new TaskDetailView({todoList: this.options.todoList, cid: this.options.cid});
	    this.layout.addSubView(taskDetailView);
	    taskDetailView.afterShow(function() {
		this.container.hide().fadeIn();
	    });
	    var listTasksView = new ListTodoView({todoList: this.options.todoList});
	    listTasksView.afterShow(function() {
		this.container.removeClass("span10").addClass("span6");
	    }).afterClose(function() {
		this.container.removeClass("span6").addClass("span10");
	    });;
	    this.layout.addSubView(listTasksView);
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