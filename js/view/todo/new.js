define(['underscore', 'backbone', 'text!template/todo/new.html'], function(_, Backbone, newTodoTemplate) {
    var NewTodoView = Backbone.View.extend({
	tagName: "form",
	id: "#new-task-form",
	container: $('#new-task'),
	
	events: {
	    'click #submit-task' : 'createTodo',
	    'click #new-form-cancel' : 'close'
	},

	initialize: function() {
	    this.todos = this.options.todoList;
	    this.afterShowHooks = [];
	    this.beforeCloseHooks = [];
	},

	show: function() {
	    this.container.html(this.el);
	    var that = this;
	    _.each(this.afterShowHooks, function(fn) {
		fn.call(that);
	    });
	},

	createTodo: function() {
	    // extract out this?
	    var name = this.$("input[name='name']").val();
	    var desc = this.$("textarea[name='desc']").val();
	    // validation?
	    this.todos.create({name: name, desc: desc});
	    this.close();
	    return false;
	},

	render: function(){
	    var compiledTemplate = _.template(newTodoTemplate);
	    this.$el.html(compiledTemplate);
            return this;
	},

	close: function() {
	    var that = this;
	    _.each(this.beforeCloseHooks, function(fn) {
		fn.call(that);
	    });
	    this.el = null;
	    this.off();
	    this.undelegateEvents();
	    this.remove();
	    this.container = null;
	},

	afterShow: function(fn) {
	    this.afterShowHooks.push(fn);
	    return this;
	},

	beforeClose: function(fn) {
	    this.beforeCloseHooks.push(fn);
	    return this;
	}
	
    });

    return NewTodoView;
});
