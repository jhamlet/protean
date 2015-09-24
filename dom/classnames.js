var toArray  = require('lodash/lang/toArray');
var isString = require('lodash/lang/isString');
var pairs    = require('lodash/object/pairs');
var set      = require('lodash/object/set');
var uniq     = require('lodash/array/uniq');
/**
 * Utility function to get a className string.
 *
 * Supply a list of strings, or objects with class names -> boolean indicating
 * whether that class should be used. The returned string will contain all the
 * class names indicated without duplicates, and separated by spaces.
 *
 * **File**: [dom/classnames.js](dom/classnames.js)
 *
 * @static
 * @member module:Protean.classnames
 * @function
 * @param {...String|Object<String, Boolean>} arg
 * @returns {String}
 */
module.exports = function classnames () {
    return toArray(arguments).
        filter(Boolean).
        // convert to objects
        map(function (arg) {
            return !isString(arg) ? arg : set({}, arg, true);
        }).
        // convert to pairs
        map(pairs).
        // flatten out the stream
        reduce(function (acc, cur, idx, context) {
            cur.forEach(function (i) { i[1] && acc.push(i[0]); });
            if (idx === context.length - 1) {
                acc = uniq(acc);
            }
            return acc;
        }, []).
        join(' ');
};
