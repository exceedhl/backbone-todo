define(['underscore', 'backbone', 'view/view', 'text!template/todo/new.html'], function(_, Backbone, View, newTodoTemplate) {
    var NewTodoView = View.extend({
	tagName: "form",
	id: "#new-task-form",
	container: $('#new-task'),
	
	events: {
	    'click #submit-task' : 'createTodo',
	    'click #new-form-cancel' : 'close'
	},

	initialize: function() {
	    this.callSuper('initialize');
	    this.todos = this.options.todoList;
	},

	show: function() {
	    this.callSuper('show');
	    this.container.html(this.el);
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
	}
    });

    return NewTodoView;
});
