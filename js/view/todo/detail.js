define(['underscore', 'backbone', 'require', 'model/todo', "text!template/todo/detail.html"], function(_, Backbone, require, Todo, taskDetailTemplate) {
    var TaskDetailView = Backbone.View.extend({
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
	    this.todoList = this.options.todoList;
	    this.todo = this.todoList.get(this.options.cid);
	    console.log(this.todo);
	    this.afterShowHooks = [];
	    this.afterCloseHooks = [];
	},

	render: function() {
	    var compiledTemplate = _.template(taskDetailTemplate, {todo: this.todo});
	    this.$el.html(compiledTemplate);
	    return this;
	},

	afterShow: function(fn) {
	    this.afterShowHooks.push(fn);
	    return this;
	},

	show: function() {
	    this.container.html(this.el);
	    var that = this;
	    _.each(this.afterShowHooks, function(fn) {
		fn.call(that);
	    });
	},

	afterClose: function(fn) {
	    this.afterCloseHooks.push(fn);
	    return this;
	},

	close: function() {
	    _.each(this.subViews, function(view) {
		view.close();
	    });
	    this.subViews = null;
	    this.off();
	    this.undelegateEvents();
	    this.remove();
	    var that = this;
	    _.each(this.afterCloseHooks, function(fn) {
		fn.call(that);
	    });
	    this.container = null;
	}

    });

    return TaskDetailView;
});
