define(['underscore', 'backbone', 'text!template/todo/new.html'], function(_, Backbone, newTodoTemplate) {
    var NewTodoView = Backbone.View.extend({
	tagName: "form",
	id: "#new-task-form",
	
	events: {
	    'click #submit-task' : 'createTodo',
	    'click #new-form-cancel' : 'detach'
	},

	initialize: function() {
	    this.todos = this.options.todoList;
	},

	detach: function() {
	    var that = this;
	    this.$el.slideUp(function() {
		that.close();
	    });
	},

	createTodo: function() {
	    // extract out this?
	    var name = this.$el.find("input[name='name']").val();
	    var desc = this.$el.find("textarea[name='desc']").val();
	    // validation?
	    this.todos.create({name: name, desc: desc});
	    this.detach();
	    return false;
	},

	render: function(){
	    var compiledTemplate = _.template(newTodoTemplate);
	    this.$el.html(compiledTemplate);
            return this;
	},

	close: function() {
	    this.off();
	    this.undelegateEvents();
	    this.remove();
	}
	
    });

    var view = null;

    NewTodoView.getCachedView = function(options) {
	if (view == null) {
	    view = new NewTodoView(options);
	}
	return view;
    };

    return NewTodoView;
});
