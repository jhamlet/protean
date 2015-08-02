var partition = require('lodash/collection/partition'),
    object = require('lodash/array/object');

function isEven (a, i) { return i % 2 === 0; }

/**
 * Takes a list of alternating key/values and returns an object.
 * @member module:Protean.enmap
 * @function
 * @param {...Mixed} args
 * @returns {Object}
 */
module.exports = function enmap () {
    var keyValues = partition(arguments, isEven);
    return object.apply(null, keyValues);
};
