var partial = require('lodash/function/partial');
/**
 * **File:** [predicates/is.js](predicates/is.js)
 *
 * @param {*} left
 * @param {*} right
 * @returns {Function|Boolean} If only given the `right` argument returns a
 * Function that will compare the `left` argument given to it, otherwise it
 * returns whether or not `right` strictly equals `left`
 */
module.exports = function is () {
    return arguments.length === 1 ?
        partial(is, arguments[0]) :
        arguments[0] === arguments[1];
};
