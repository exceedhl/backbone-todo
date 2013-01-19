define(['underscore', 'backbone'], function(_, Backbone) {
    var eventAggregator = null;
    if (eventAggregator == null) {
	eventAggregator = _.extend({}, Backbone.Events);
    }
    return eventAggregator;
});
