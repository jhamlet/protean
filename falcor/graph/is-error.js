var isSentinel = require('./is-sentinel');
/**
 * **File:** [falcor/graph/is-error.js](falcor/graph/is-error.js)
 *
 * @member module:Falcor.Graph.isError
 * @function
 * @param {*} sentinel
 * @returns {Boolean}
 */
module.exports = function isError (sentinel) {
    return isSentinel(sentinel) && sentinel.$type === 'error';
};
