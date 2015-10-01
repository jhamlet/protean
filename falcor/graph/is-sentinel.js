/**
 * **File:** [falcor/graph/is-sentinel.js](falcor/graph/is-sentinel.js)
 *
 * @member module:Falcor.Graph.isSentinel
 * @function
 * @param {*} sentinel
 * @returns {Boolean}
 */
module.exports = function isSentinel (sentinel) {
    return typeof sentinel === 'object' && sentinel.$type;
};
