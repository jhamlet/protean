var R = require('ramda');
/**
 * Takes an argument list of strings and returns an object with those keys, and their
 * values being the index of that key plus one.
 *
 * **File:** [object/enumerate.js](object/enumerate.js)
 *
 * @member module:Protean.enumerate
 * @function
 * @param {...String}
 * @returns {Object}
 */
module.exports = function enumerate () {
    return R.zipObj(arguments, R.range(1, arguments.length + 1));
};

