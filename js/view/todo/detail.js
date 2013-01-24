define(['underscore', 'backbone', 'require', 'model/todo', 'view/view', "text!template/todo/detail.html"], function(_, Backbone, require, Todo, View, taskDetailTemplate) {
    var TaskDetailView = View.extend({
	tagName: "div",
	className: "span4",
	$container: $('#container'),

	events : {
	    "click button[type='submit']": "submit",
	    "click #change-todo-cancel": "cancel"
	},

	cancel: function() {
	    console.log("in cancel");
	    require("router").navigate("task", {trigger: true});
	},

	submit: function() {
	    if (this.form().parsley('validate')) {
		console.log("changing todo");
		var owner = this.$("#inputOwner").val();
		var desc = this.$("#inputDesc").val();
		var dueDate = this.$("#inputDueDate").val();

		this.todo.set({desc: desc, owner: owner, dueDate: dueDate}).save();
		this.cancel();
		console.log(this.todo);
	    }
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

	form: function() {
	    return this.$("form");
	},

	show: function() {
	    this.callSuper('show');
	    this.$container.append(this.el);
	    this.form().parsley();
	}
    });

    return TaskDetailView;
});
