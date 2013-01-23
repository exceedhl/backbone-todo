define(['model/project'], function(Project) {
    new Project({name: "project 1"}).save();
    new Project({name: "project 2"}).save();
    new Project({name: "project 3"}).save();
});
