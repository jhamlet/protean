/**
 * @typedef ProteanClassExtend
 * @type {Function}
 * @param {Function} [subclass]
 * @param {Object} [props]
 * @param {Object} [properties]
 * @returns {ProteanClass}
 */
/**
 * @typedef ProteanClassExtended
 * @type {Function}
 * @param {Function} subclass
 */
/**
 * @typedef ProteanClass
 * @type {Function}
 * @property {ProteanClassExtend} extend A function to extend this class
 * into another one
 * @property {ProteanClassExtended} [extended] A function that will be
 * called when the class is extended into another
 * @property {Function} superclass A reference to this class' superclass
 * constructor
 * @property {Object} superproto A reference to this class' superclass prototype
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

