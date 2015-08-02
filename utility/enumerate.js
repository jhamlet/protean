var reduce = require('lodash/collection/reduce');
/**
 * Takes an argument list of strings and returns an object with those keys, and their
 * values being the index of that key plus one.
 * @member module:Protean.enumerate
 * @function
 * @param {...String}
 * @returns {Object}
 */
module.exports = function enumerate () {
    return reduce(arguments, function (acc, cur, idx) {
        acc[cur] = idx + 1;
        return acc;
    }, {});
};
