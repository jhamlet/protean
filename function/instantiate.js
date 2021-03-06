/**
 * Create a new object and then apply the constructor function with the arguments.
 *
 * **File**: [function/instantiate.js](function/instantiate.js)
 *
 * @member module:Protean.instantiate
 * @function
 * @param {Function} fn The constructor function
 * @param {Array<Mixed>} [args] Arguments to pass to the constructor function
 * @returns {Object} The new instance
 */
module.exports = function instantiate (fn, args) {
    var obj = Object.create(fn.prototype);
    fn.apply(obj, args || []);
    return obj;
};

