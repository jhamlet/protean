var sentinels = require('./sentinels');
var isAtom = require('./is-atom');

function visitor (graph, subject, path, sentinel) {
    if (isAtom(sentinel)) {
        subject(path, sentinel, graph);
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
    sentinels(graph, visitor.bind(null, graph, fn));
};

/**
 * @typedef module:Falcor.Graph.atoms~visitorFn
 * @function
 * @param {Path} path
 * @param {Atom} atom
 * @param {JSONGraph} graph
 */
