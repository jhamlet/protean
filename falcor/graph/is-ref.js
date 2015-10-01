var isSentinel = require('./is-sentinel');
/**
 * **File:** [falcor/graph/is-ref.js](falcor/graph/is-ref.js)
 *
 * @member module:Falcor.Graph.isRef
 * @function
 * @param {*} sentinel
 * @returns {Boolean}
 */
module.exports = function isRef (sentinel) {
    return isSentinel(sentinel) && sentinel.$type === 'ref';
};
