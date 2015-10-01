/**
 * @typedef ProteanClass
 * @type {Function}
 * @constructor
 */
/**
 * A function to extend this class into another one
 * @member ProteanClass.extend
 * @function
 * @param {Function} [subclass]
 * @param {Object} [props]
 * @param {Object} [properties]
 * @returns {ProteanClass}
 */
/**
 * A function that will be called when the class is extended into another
 * @member ProteanClass.extended
 * @function
 * @param {Function} subclass
 */
/**
 * A reference to this class' superclass constructor
 * @member ProteanClass.superclass
 * @function
 */
/**
 * A reference to this class' superclass prototype
 * @member ProteanClass.superproto
 * @type {Object}
 */
/**
 * Create a constructor function passing in it's prototype methods.
 *
 * **File**: [function/classify](function/classify.js)
 *
 * @member module:Protean.classify
 * @function
 * @param {Function} [subclass] The subclass constructor function.
 * @param {Object} props Bare properties for the constructor's prototype.
 * @param {Object} [properties] Object.defineProperty property definitions.
 * @returns {ProteanClass}
 */
module.exports = require('./inherit').bind(null, Object);

