define(['underscore', 'backbone', 'require', 'model/todo', 'view/view', "text!template/todo/detail.html"], function(_, Backbone, require, Todo, View, taskDetailTemplate) {
    var TaskDetailView = View.extend({
	tagName: "form",
	container: $('#edit-task'),

	events : {
	    "click button[type='submit']": "submit",
	    "click #change-todo-cancel": "cancel"
	},

	cancel: function() {
	    console.log("in cancel");
	    require("router").navigate("task", {trigger: true});
	},

	submit: function() {
	    console.log("changing todo");
	    var owner = this.$("#inputOwner").val();
	    var desc = this.$("#inputDesc").val();
	    var dueDate = this.$("#inputDueDate").val();

	    this.todo.set({desc: desc, owner: owner, dueDate: dueDate}).save();
	    this.cancel();
	    console.log(this.todo);
	    return false;
	},

	initialize: function() {
	    this.callSuper('initialize');
	    this.todoList = this.options.todoList;
	    this.todo = this.todoList.get(this.options.cid);
	    console.log(this.todo);
	},

	render: function() {
	    var compiledTemplate = _.template(taskDetailTemplate, {todo: this.todo});
	    this.$el.html(compiledTemplate);
	    return this;
	},

	show: function() {
	    this.callSuper('show');
	    this.container.html(this.el);
	}
    });

    return TaskDetailView;
});
