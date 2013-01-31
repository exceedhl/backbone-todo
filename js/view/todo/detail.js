define(['underscore', 'backbone', 'require', 'model/todo', 'view/view', "text!template/todo/detail.html"], function(_, Backbone, require, Todo, View, taskDetailTemplate) {
    var TaskDetailView = View.extend({
	tagName: "div",
	id: "task-detail",
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
		var owner = this.$("#inputOwner").val();
		var desc = this.$("#inputDesc").val();
		var dueDate = this.$("#inputDueDate").val();

		this.todo.set({desc: desc, owner: owner, dueDate: dueDate}).save();
		this.cancel();
	    }
	    return false;
	},

	initialize: function() {
	    this.callSuper('initialize');
	    this.todo = this.options.todo;
	},

	render: function() {
	    var compiledTemplate = _.template(taskDetailTemplate, {todo: this.todo});
	    this.$el.html(compiledTemplate);
	    this.form().parsley();
	    return this;
	},

	form: function() {
	    return this.$("form");
	},

	show: function() {
	    this.callSuper('show');
	    this.$container.append(this.el);
	}
    });

    return TaskDetailView;
});
