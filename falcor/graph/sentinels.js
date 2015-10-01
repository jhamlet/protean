var traverse = require('protean/object/traverse');
var isSentinel = require('./is-sentinel');

function visitor (graph, subject, path, value) {
    if (path.length && isSentinel(value)) {
        subject(path, value, graph);
        return traverse.SKIP;
    }
}
/**
 * **File:** [falcor/graph/sentinels.js](falcor/graph/sentinels.js)
 *
 * @member module:Falcor.Graph.sentinels
 * @function
 * @param {JSONGraph} graph
 * @param {Graph.sentinels~visitorFn} fn
 */
module.exports = function sentinels (graph, fn) {
    traverse(graph, visitor.bind(null, graph, fn));
};

/**
 * @typedef module:Falcor.Graph.sentinels~visitorFn
 * @function
 * @param {Path} path
 * @param {Sentinel} sentinel
 * @param {JSONGraph} graph
 */
