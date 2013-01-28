define(['model/project', 'model/todo', 'model/todo_list'], function(Project, Todo, TodoList) {
    var project1 = new Project({name: "project 1"});
    project1.save();
    new Project({name: "project 2"}).save();
    new Project({name: "project 3"}).save();

    var todo1 = new Todo({name: "task 1"});
    var todo2 = new Todo({name: "task 2"});
    var todo3 = new Todo({name: "task 3"});
    todo1.save();
    todo2.save();
    todo3.save();
    project1.set("todos", new TodoList([todo1.id, todo2.id, todo3.id]));
    project1.save();
});
