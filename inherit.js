var u = require("underscore");

// Shared empty constructor function to aid in prototype-chain creation.
var ctor = function(){};

// Helper function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.
var inherits = function(parent, protoProps, staticProps) {
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
	child = protoProps.constructor;
    } else {
	child = function(){ parent.apply(this, arguments); };
    }

    // Inherit class (static) properties from parent.
    u.extend(child, parent);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) u.extend(child.prototype, protoProps);

    // Add static properties to the constructor function, if supplied.
    if (staticProps) u.extend(child, staticProps);

    // Correctly set child's `prototype.constructor`.
    child.prototype.constructor = child;

    // Set a convenience property in case the parent's prototype is needed later.
    child.__super__ = parent.prototype;

    return child;
};

var P = function() {
    this.p = "in p";
};

P.prototype = {
    pp: "in p's prototype"
};

var C = inherits(P, {cp: "in c's prototype"}, {cstatic: "in C's static"});

var c = new C();