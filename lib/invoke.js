var _ = require('underscore');
/**
 * @typedef module:Protean~invoker
 * @type Function
 * @param {Object} obj
 */
/**
 * @member module:Protean.invoke
 * @function
 * @param {String} name The property name of the method to invoke
 * @param {...Mixed} [arg] Additional arguments to pass to the invoked function
 * @returns {module:Protean~invoker}
 */
function invoke (name) {
    var args = _.rest(arguments, 1);

    return function invoker (obj) {
        return obj[name].apply(obj, args);
    };
}

module.exports = invoke;
