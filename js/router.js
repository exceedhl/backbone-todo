define(["underscore", "backbone", 'model/todo_list', "view/todo_layout", 'view/task_detail_page', 'view/list_tasks_page'], function(_, Backbone, TodoList, TodoLayout, TaskDetailPage, ListTasksPage) {
    var router = null;
    var lastPage;

    var AppRouter = Backbone.Router.extend({
	routes : {
	    // "" : "listTasks",
	    "task" : "listTasks",
	    "task/:id" : "showTaskDetail"
	},

	listTasks: function() {
	    if (lastPage) {
		lastPage.close();
	    }
	    lastPage = new ListTasksPage({todoList: this.todoList}).show();
	},

	showTaskDetail: function(id) {
	    if (lastPage) {
		lastPage.close();
	    }
	    lastPage = new TaskDetailPage({todoList: this.todoList, cid:id}).show();
	},

	initialize: function() {
	    this.todoList = new TodoList();
	    this.todoList.fetch();
	    Backbone.history.start({pushState: false});
	}
    });

    AppRouter.getInstance = function() {
	if (router == null) {
	    router = new AppRouter();
	}
	return router;
    };


    return AppRouter.getInstance();
});

