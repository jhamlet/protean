/**
 * @typedef module:Protean~ClassExtend
 * @type {Function}
 * @param {Function} [subclass]
 * @param {Object} [props]
 * @param {Object} [properties]
 * @returns {module:Protean~Class}
 */
/**
 * @typedef module:Protean~ClassExtended
 * @type {Function}
 * @param {Function} subclass
 */
/**
 * @typedef module:Protean~Class
 * @type {Function}
 * @property {module:Protean~ClassExtend} extend A function to extend this class into
 * another one
 * @property {module:Protean~ClassExtended} [extended] A function that will be called
 * when the class is extended into another
 * @property {Function} superclass A reference to this class' superclass constructor
 * @property {Object} superproto A reference to this class' superclass prototype
 */
/**
 * @member module:Protean.classify
 * @function
 * @param {Function} [subclass] The subclass constructor function.
 * @param {Object} props Bare properties for the constructor's prototype.
 * @param {Object} [properties] Object.defineProperty property definitions.
 * @returns {module:Protean~Class}
 */
module.exports = require('./inherit').bind(null, Object);

