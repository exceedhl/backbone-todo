define([
    "underscore", 
    "backbone", 
    'model/todo_list',
    'model/projects',
    "view/todo_layout", 
    'view/task_detail_page', 
    'view/list_tasks_page',
    'view/project/list'], 
function(
    _, Backbone, 
    TodoList,
    Projects,
    TodoLayout, 
    TaskDetailPage, 
    ListTasksPage,
    ListProjectsView
) {
    var router = null;
    var lastPage;

    var AppRouter = Backbone.Router.extend({
	routes : {
	    "task" : "listTasks",
	    "task/:id" : "showTaskDetail",
	    "project" : "listProjects"
	},

	listTasks: function() {
	    this.closeLastPage();
	    lastPage = new ListTasksPage({todoList: this.todoList}).render().show();
	},

	showTaskDetail: function(id) {
	    this.closeLastPage();
	    lastPage = new TaskDetailPage({todoList: this.todoList, cid:id}).render().show();
	},

	listProjects: function() {
	    this.closeLastPage();
	    lastPage = new ListProjectsView({projects: this.projects}).render().show();
	},

	closeLastPage: function() {
	    if (lastPage) {
		lastPage.close();
	    }
	},

	initialize: function() {
	    this.todoList = new TodoList();
	    this.todoList.fetch();
	    this.projects = new Projects();
	    this.projects.fetch();
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

