var isSentinel = require('./is-sentinel');
/**
 * **File:** [falcor/graph/is-atom.js](falcor/graph/is-atom.js)
 *
 * @member module:Falcor.Graph.isAtom
 * @function
 * @param {*} sentinel
 * @returns {Boolean}
 */
module.exports = function isAtom (sentinel) {
    return isSentinel(sentinel) && sentinel.$type === 'atom';
};
