define(['underscore', 'backbone', 'model/todo_list', 'view/view', "view/todo/detail", 'view/todo/list'], function(_, Backbone, TodoList, View, TaskDetailView, ListTodoView) {

    var TaskDetailPage = View.extend({
		
	initialize: function() {
	    this.callSuper("initialize");
	    var listTasksView = new ListTodoView({todoList: this.options.todoList});
	    listTasksView.afterShow(function() {
		this.$el.removeClass("span12").addClass("span8");
	    }).afterClose(function() {
		this.$el.removeClass("span8").addClass("span12");
	    });;
	    var taskDetailView = new TaskDetailView({todoList: this.options.todoList, cid: this.options.cid});
	    taskDetailView.afterShow(function() {
		this.$el.hide().fadeIn();
	    });
	    this.addSubView(listTasksView);
	    this.addSubView(taskDetailView);
	}
	
    });

    return TaskDetailPage;
});