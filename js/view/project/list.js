define(['underscore', 'backbone', 'view/view', 'text!template/project/list.html'], function(_, Backbone, View, listProjectsTemplate) {
    var ListProjectsView = View.extend({
	tagName: "div",
	className: "span12",
	$container: $('#container'),

	initialize: function() {
	    this.callSuper('initialize');
	    this.projects = this.options.projects;
	},

	render: function() {
	    var compiledTemplate = _.template(listProjectsTemplate, {_: _, projects: this.projects.models});
	    this.$el.html(compiledTemplate); 
            return this;
	},

	show: function() {
	    this.callSuper('show');
	    this.$container.html(this.el);
	    return this;
	}

    });

    return ListProjectsView;
});
