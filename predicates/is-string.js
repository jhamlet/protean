var R = require('ramda');
var denominate = require('protean/object/denominate');
/**
 * **File:** [predicates/is-string.js](predicates/is-string.js)
 *
 * @member module:Protean.isString
 * @param {*} value
 * @returns {Boolean}
 */
module.exports = denominate(R.is(String), 'isString');
