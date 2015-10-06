var first   = require('lodash/array/first');
var values  = require('lodash/object/values');
var compose = require('lodash/function/compose');
var partial = require('lodash/function/partial');
var rearg   = require('lodash/function/rearg');
var pick    = rearg(require('lodash/object/pick'), 1, 0);
var firstValues = compose(first, values);
/**
 * **File:** [object/pluck.js](object/pluck.js)
 *
 * @member module:Protean.pluck
 * @param {String} key
 * @param {Object} [obj]
 * @returns {*|Function}
 */

module.exports = function pluck (key, obj) {
    if (!obj) {
        return compose(
            firstValues,
            partial(pick, key)
        );
    }

    return pick(key, obj)[key];
};
