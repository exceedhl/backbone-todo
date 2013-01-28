define(['underscore', 'backbone', 'view/view', 'text!template/project/show.html'], function(_, Backbone, View, showProjectTemplate) {
    var ShowProjectView = View.extend({
	tagName: "div",
	className: "span12",
	$container: $('#container'),

	initialize: function() {
	    this.project = this.options.project;
	    this.project.fetchRelated("todos");
	},

	render: function() {
	    this.callSuper('render');
	    var compiledTemplate = _.template(showProjectTemplate, {project: this.project});
	    this.$el.html(compiledTemplate);
	    return this;
	},

	show: function() {
	    this.callSuper('show');
	    this.$container.append(this.el);
	    return this;
	}
    });

    return ShowProjectView;
});
