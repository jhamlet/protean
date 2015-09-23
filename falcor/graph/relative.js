var putil    = require('../path');
var traverse = require('protean/object/traverse');
var set      = require('lodash/object/set');

function visitor (accumulator, root, path, value) {
    var local = putil.relative(root, path);
    set(accumulator, local, value);
}
/**
 * @member module:Falcor.Graph.relative
 * @function
 * @param {Path} root
 * @param {JSONGraph} graph
 * @returns {JSONGraph}
 */
module.exports = function relative (root, graph) {
    var output = {};

    traverse(graph, visitor.bind(null, output, root));

    return output;
};
