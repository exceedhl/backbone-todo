define(['underscore', 'backbone', 'model/todo_list', "view/view", 'view/todo/list'], function(_, Backbone, TodoList, View, ListTodoView) {
    var ListTasksPage = View.extend({
	
	initialize: function() {
	    this.callSuper("initialize");
	    this.addSubView(new ListTodoView({todoList: this.options.todoList}));
	}
	
    });

    return ListTasksPage;
});
