define(['underscore', 'backbone', 'model/todo', 'model/todo_list', 'backbone-relational'], function(_, Backbone, Todo, TodoList) {
    var Project = Backbone.RelationalModel.extend({
	modelName: "project",
	
	relations: [
            {
		type: Backbone.HasMany,
		key: 'todos',
		relatedModel: Todo,
		collectionType: TodoList,
		reverseRelation: {
                    key: 'project'
		}
            }
	],
	
	defaults: {
	    "name" : ""
	}
    });
    return Project;

});
