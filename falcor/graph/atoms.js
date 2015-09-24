var traverse = require('protean/object/traverse');

function visitor (graph, subject, path, value) {
    if (path.length && value && value.$type) {
        subject(path, value, graph);
    }
}
/**
 * **File:** [falcor/graph/atoms.js](falcor/graph/atoms.js)
 *
 * @member module:Falcor.Graph.atoms
 * @function
 * @param {JSONGraph} graph
 * @param {Graph.atoms~visitorFn} fn
 */
module.exports = function atoms (graph, fn) {
    traverse(graph, visitor.bind(null, graph, fn));
};

/**
 * @typedef module:Falcor.Graph.atoms~visitorFn
 * @function
 * @param {Path} path
 * @param {Atom} atom
 * @param {JSONGraph} graph
 */
