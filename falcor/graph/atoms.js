var traverse = require('protean/object/traverse');
/**
 * @typedef module:Protean.falcor.graph.atoms~visitorFn
 * @function
 * @param {String[]} path
 * @param {external:falcor.Atom} atom
 * @param {Object} graph
 */
function visitor (graph, subject, path, value) {
    if (path.length && value && value.$type) {
        subject(path, value, graph);
    }
}
/**
 * @member module:Protean.falcor.graph.atoms
 * @function
 * @param {Object} graph
 * @param {module:Protean.falcor.graph.atoms~visitorFn} fn
 */
module.exports = function atoms (graph, fn) {
    traverse(graph, visitor.bind(null, graph, fn));
};
