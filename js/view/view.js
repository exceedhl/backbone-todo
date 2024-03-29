define(['underscore', 'backbone'], function(_, Backbone) {
    var View = Backbone.View.extend({
	
	initialize: function(){
	    this.subViews = [];
	    this.afterShowHooks = [];
	    this.afterCloseHooks = [];
	    this.beforeShowHooks = [];
	    this.beforeCloseHooks = [];
	    this.wrap('close');
	    this.wrap('show');
	    this.beforeClose(function() {
		this.closeSubViews();
		this.off();
		this.undelegateEvents();
	    });
	    this.afterClose(function() {
		this.subViews = null;
		this.afterShowHooks = null;
		this.afterCloseHooks = null;
		this.beforeShowHooks = null;
		this.beforeCloseHooks = null;
		this.el = null;
		this.$el = null;
	    });	
	},

	wrap: function(method) {
	    var that  = this;
	    var func = this[method];
	    var capMethod = method.charAt(0).toUpperCase() + method.slice(1);
	    this[method] = function() {
		_.each(this['before' + capMethod + 'Hooks'], function(fn) {
		    fn.call(that);
		});
		func.call(that);
		_.each(this['after' + capMethod + 'Hooks'], function(fn) {
		    fn.call(that);
		});
		return this;
	    };
	},

	afterShow: function(fn) {
	    this.afterShowHooks.push(fn);
	    return this;
	},

	afterClose: function(fn) {
	    this.afterCloseHooks.unshift(fn);
	    return this;
	},

	beforeShow: function(fn) {
	    this.beforeShowHooks.push(fn);
	    return this;
	},

	beforeClose: function(fn) {
	    this.beforeCloseHooks.push(fn);
	    return this;
	},

	addSubView: function(view) {
	    this.subViews.push(view);
	    return this;
	},

	closeSubViews: function() {
	    _.each(this.subViews, function(view) {
		view.close();
	    });
	    this.subViews = [];
	},
	
	showSubViews: function() {
	    _.each(this.subViews, function(view) {
		view.show();
	    });
	},
	
	render: function() {
	    _.each(this.subViews, function(view) {
		view.render();
	    });
	    return this;
	},

	show: function() {
	    this.showSubViews();
	},

	close: function() {
	    this.remove();
	    return this;
	},

	callSuper: function(method) {
	    this.constructor.__super__[method].call(this);
	}

	
    });

    return View;
});
