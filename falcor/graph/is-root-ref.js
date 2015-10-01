var isRef = require('./is-ref');
/**
 * **File:** [falcor/graph/is-root-ref.js](falcor/graph/is-root-ref.js)
 *
 * @member module:Falcor.Graph.isRootRef
 * @function
 * @param {*} sentinel
 * @returns {Boolean}
 */
module.exports = function isRootRef (sentinel) {
    return isRef(sentinel) && sentinel.$root;
};
