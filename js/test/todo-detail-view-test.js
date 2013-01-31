define(["require", "chai", "underscore", "backbone", "model/todo", "view/todo/detail", "test/backbone-local"], function(require, chai, _, Backbone, Todo, TodoDetailView) {
    var expect = chai.expect;

    describe("TodoDetailView", function() {
	it('should update task detail', function() {
	    var todo = new Todo({name: "todo 1"});
	    var view  = new TodoDetailView({todo: todo});
	    view.render();

	    view.$("#inputDesc").val("desc");
	    view.$("#inputOwner").val("a@a.com");
	    view.$("#inputDueDate").val("2001-02-13");
	    var result = view.submit();
	    expect(result).to.equal(false);
	    expect(todo.get("desc")).to.equal("desc");
	    expect(window.location.hash).to.equal("#task");
	});
    });
});
