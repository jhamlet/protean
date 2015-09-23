var traverse = require('protean/object/traverse');
/**
 * @typedef Graph.atoms~visitorFn
 * @function
 * @param {PathSet[]} path
 * @param {Graph.Atom} atom
 * @param {JSONGraph} graph
 */
function visitor (graph, subject, path, value) {
    if (path.length && value && value.$type) {
        subject(path, value, graph);
    }
}
/**
 * @member Graph.atoms
 * @function
 * @param {JSONGraph} graph
 * @param {Graph.atoms~visitorFn} fn
 */
module.exports = function atoms (graph, fn) {
    traverse(graph, visitor.bind(null, graph, fn));
};
