var sentinels = require('./sentinels');
var isRef = require('./is-ref');

function visitor (graph, subject, path, sentinel) {
    if (isRef(sentinel)) {
        subject(path, sentinel, graph);
    }
}
/**
 * **File:** [falcor/graph/refs.js](falcor/graph/refs.js)
 *
 * @member module:Falcor.Graph.refs
 * @function
 * @param {JSONGraph} graph
 * @param {Graph.atoms~visitorFn} fn
 */
module.exports = function atoms (graph, fn) {
    sentinels(graph, visitor.bind(null, graph, fn));
};

/**
 * @typedef module:Falcor.Graph.refs~visitorFn
 * @function
 * @param {Path} path
 * @param {Reference} ref
 * @param {JSONGraph} graph
 */
