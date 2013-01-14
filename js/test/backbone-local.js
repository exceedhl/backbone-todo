define(["test/local", "backbone", "underscore"], function(Store, Backbone, _) {
    var store = new Store("backbone");

    Backbone.sync = function(method, model, options) {
	options = _.extend({}, options);

        var resp;
	var result;

        switch (method) {
            case "read":    resp = model.id ? store.find(model) : store.findAll(); break;
            case "create":  resp = store.create(model);                            break;
            case "update":  resp = store.update(model);                            break;
            case "delete":  resp = store.destroy(model);                           break;
        }

        if (resp) {
	    options.success(resp);
        } else {
	    options.error("Record not found");
        }
	
    };

    return store;

});

