define(['underscore', 'backbone', 'view/view', 'text!template/todo/new.html'], function(_, Backbone, View, newTodoTemplate) {
    var NewTodoView = View.extend({
	tagName: "div",
	className: "new-todo",
	$container: $('#container'),
	
	events: {
	    'click #submit-task' : 'createTodo',
	    'click #new-form-cancel' : 'cancel'
	},

	cancel: function() {
	    this.close();
	    return false;
	},

	initialize: function() {
	    this.callSuper('initialize');
	    this.todos = this.options.todoList;
	},

	form: function() {
	    return this.$("form");
	},

	show: function() {
	    this.callSuper('show');
	    this.$container.prepend(this.el);
	    this.form().parsley();
	},

	createTodo: function() {
	    if (this.form().parsley('validate')) {
		// extract out this?
		var name = this.$("input[name='name']").val();
		var desc = this.$("textarea[name='desc']").val();
		// validation?
		this.todos.create({name: name, desc: desc});
		this.close();
	    }
	    return false;
	},

	render: function(){
	    var compiledTemplate = _.template(newTodoTemplate);
	    this.$el.html(compiledTemplate);
            return this;
	}
    });

    return NewTodoView;
});
