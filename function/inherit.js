var augment = require('protean/object/augment'),
    wrap = require('lodash/function/wrap');
/**
 * Create a constructor function that inherits properties and methods from the
 * given super constructor.
 *
 * **File**: [function/inherit.js](function/inherit.js)
 *
 * @member module:Protean.inherit
 * @function
 * @param {Function} superclass The function to inherit from.
 * @param {Function} [subclass=Function] The Subclass constructor function.
 * If omitted, and a `constructor` property is not defined in `props`, defaults
 * to a function that calls the superclass' constructor function.
 * @param {Object} [props] Bare properties to initialize the prototype with.
 * @param {Object} [properties={}] Object.defineProperty property definitions.
 * @returns {ProteanClass} The constructor function.
 */
function inherit (superclass, subclass, props, properties) {
    var hasCtor, superproto, proto;

    if (arguments.length < 4 && typeof subclass !== 'function') {
        properties = props;
        props = subclass;
        subclass = null;
    }
    // TODO: Determine if we should look for a constructor property in the
    // properties hash
    hasCtor = props && props.hasOwnProperty('constructor');
    subclass = (typeof subclass === 'function' && subclass) ||
        (hasCtor && props.constructor) ||
        function () { superclass.apply(this, arguments); };
    // Generate our prototype
    superproto = superclass.prototype;
    subclass.prototype =
        proto =
        augment(Object.create(superproto), subclass.prototype);

    properties = properties || {};
    if (props) {
        delete props.constructor;
        augment(proto, props);
    }
    // Update the constructor and define any extra properties
    properties.constructor = { value: subclass };
    Object.defineProperties(proto, properties);
    // updated short-cut references
    subclass.superclass = superclass;
    subclass.superproto = superproto;
    // first time being extended?
    if (!subclass.extend) {
        subclass.extend = inherit.bind(subclass, subclass);
    }

    subclass.extended = subclass.extended ?
        wrap(subclass.extended.bind(subclass), function (f, sc) {
            superclass.extended && superclass.extended(sc);
            f(sc);
        }) :
        superclass.extended;

    // notify the superclass that it has been extended
    if (superclass.extended) {
        superclass.extended(subclass);
    }

    return subclass;
}

module.exports = inherit;

