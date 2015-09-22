var putil    = require('../path');
var traverse = require('protean/object/traverse');
var set      = require('lodash/object/set');

function visitor (accumulator, root, path, value) {
    var local = putil.relative(root, path);
    set(accumulator, local, value);
}
/**
 * @member module:Protean.falcor.graph.relative
 * @function
 * @param {external:falcor.Path} root
 * @param {Object} graph
 * @returns {Object}
 */
module.exports = function relative (root, graph) {
    var output = {};

    traverse(graph, visitor.bind(null, output, root));

    return output;
};
