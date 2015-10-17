var curry    = require('lodash/function/curry');
var methodOf = require('lodash/utility/methodOf');
/**
 * @member module:Protean.invoke
 * @param {String} property
 * @param {Object} subject
 * @returns {*}
 */
module.exports = curry(function (path, object) {
    return methodOf(object)(path);
});
