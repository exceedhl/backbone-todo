define(['underscore', 'backbone', 'text!template/todo/list_item.html'], function(_, Backbone, listTodoItemTemplate) {
    var ListTodoItemView = Backbone.View.extend({
	tagName: "tr",

	events: {
	    "click input[type='checkbox']": "check"
	},

	check: function() {
	  this.todo.toggleDone();  
	},
	
	initialize: function(){
            this.todo = this.options.todo;
	},
	
	render: function(){
	    var compiledTemplate = _.template(listTodoItemTemplate, {todo:this.todo});
	    this.$el.html(compiledTemplate); 
            return this;
	},

	close: function() {
	    this.off();
	    this.undelegateEvents();
	    this.remove();
	}

	
    });

    return ListTodoItemView;
});
