define(["require", "chai", "underscore", "backbone", "model/project", "model/todo", "model/todo_list", "test/backbone-local"], function(require, chai, _, Backbone, Project, Todo, TodoList) {
    var expect = chai.expect;
    var todo1, todo2, todo3;
    
    beforeEach(function(done){
	todo1 = new Todo({name: "task 1"});
	todo2 = new Todo({name: "task 2"});
	todo3 = new Todo({name: "task 3"});
	todo1.save();
	todo2.save();
	todo3.save();
	done();
    });
    
    describe("Project", function() {
	it('should have many todos', function() {

	    var project1 = new Project({name: "project 1", todos: [todo1.id, todo2.id, todo3.id]});
	    var project2 = new Project({name: "project 2"});

	    expect(todo1.get("project").get("name")).to.equal("project 1");
	    expect(todo1.get("project").get("id")).to.equal(undefined);
	    project1.save();
	    expect(project1.get("name")).to.equal("project 1");
	    expect(project1.get("id")).to.be.a('string');
	    project1.fetchRelated("todos");
	    expect(todo1.get("project").get("id")).to.not.equal(undefined);
	    expect(project1.get("todos").at(0).get("name")).to.equal("task 1");
	    expect(project1.get("todos")).have.length(3);
	    expect(project2.get("todos")).have.length(0);
	});
    });
});
