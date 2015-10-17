/**
 * @member module:Protean.denominate
 * @param {Object} obj
 * @param {String} name
 * @returns {Object} The object now with a immutable 'name' property of the
 * given name value
 */
module.exports = function denominate (obj, name) {
    return Object.defineProperty(obj, 'name', { value: name });
};
