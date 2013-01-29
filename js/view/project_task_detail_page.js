define(['underscore', 'backbone', 'model/todo_list', 'view/view', "view/todo/detail", 'view/project/show'], function(_, Backbone, TodoList, View, TaskDetailView, ShowProjectView) {

    var ProjectTaskDetailPage = View.extend({
		
	initialize: function() {
	    this.callSuper("initialize");
	    var showProjectView = new ShowProjectView({project: this.options.project});
	    showProjectView.afterShow(function() {
		this.$el.removeClass("span12").addClass("span8");
	    }).afterClose(function() {
		this.$el.removeClass("span8").addClass("span12");
	    });;
	    var taskDetailView = new TaskDetailView({todo: this.options.todo});
	    taskDetailView.afterShow(function() {
		this.$el.hide().fadeIn();
	    });
	    this.addSubView(showProjectView);
	    this.addSubView(taskDetailView);
	}
	
    });

    return ProjectTaskDetailPage;
});