define(['underscore', 'backbone', 'view/view', 'text!template/todo/list_item.html'], function(_, Backbone, View, listTodoItemTemplate) {
    var ListTodoItemView = View.extend({
	tagName: "tr",

	events: {
	    "click input[type='checkbox']": "check"
	},

	check: function() {
	  this.todo.toggleDone();  
	},
	
	initialize: function(){
	    this.callSuper('initialize');
            this.todo = this.options.todo;
	},
	
	render: function(){
	    var compiledTemplate = _.template(listTodoItemTemplate, {todo:this.todo});
	    this.$el.html(compiledTemplate); 
            return this;
	}

    });

    return ListTodoItemView;
});
