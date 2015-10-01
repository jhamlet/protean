var fromObject = require('./from-object');
/**
 * **File:** [falcor/graph/resolve.js](falcor/graph/resolve.js)
 *
 * @member module:Falcor.Graph.resolve
 * @function
 * @param {Path} root
 * @param {JSONGraph} graph
 * @returns {JSONGraph}
 */
module.exports = function resolve (root, graph) {
    return fromObject(graph, { root: root });
};
