var R          = require('ramda');
var denominate = require('protean/object/denominate');
var isString   = require('protean/predicates/is-string');
var classnames =
        R.pipe(
            R.filter(Boolean),
            R.chain(R.ifElse(isString, R.split(' '), R.identity)),
            R.map(R.ifElse(isString, R.objOf(R.__, true), R.identity)),
            R.reduce(R.merge, {}),
            R.pickBy(Boolean),
            R.keys,
            R.join(' ')
        );
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
module.exports = denominate(R.unapply(classnames), 'classnames');
