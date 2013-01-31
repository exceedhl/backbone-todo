define(["require", "chai", "underscore", "backbone", "model/project", "model/projects", "view/project/list", "test/backbone-local"], function(require, chai, _, Backbone, Project, Projects, ProjectListView) {
    var expect = chai.expect;
    
    describe("ProjectListView", function() {
	it('should render all projects', function() {
	    var projects = new Projects([
		{name: "project 1"},
		{name: "project 2"},
		{name: "project 3"}
	    ]);
	    var view = new ProjectListView({projects: projects});
	    view.render();

	    expect(view.$("td a:first-of-type").html()).to.equal("project 1");
	});
    });
});
