var R = require('ramda');
var denominate = require('protean/object/denominate');
var enmap = R.pipe(R.splitEvery(2), R.fromPairs);

/**
 * Takes a list of alternating key/values and returns an object.
 *
 * **File:** [object/enmap.js](object/enmap.js)
 *
 * @member module:Protean.enmap
 * @function
 * @param {...Mixed} args
 * @returns {Object}
 */
module.exports = denominate(R.unapply(enmap), 'enmap');
