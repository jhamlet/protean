var putil = require('../path');
var set = require('lodash/object/set');
var traverse = require('protean/object/traverse');

function visitor (accumulator, root, path, value) {
    if (path.length) {
        var local = putil.resolve(root, [path])[0];
        set(accumulator, local, value);

        if (value.$type && value.$type === 'ref') {
            value.value = putil.resolve([value.value])[0];
        }
    }
}
/**
 * @member module:Protean.falcor.graph.resolve
 * @function
 * @param {external:falcor.Path} root
 * @param {Object} graph
 * @returns {Object}
 */
module.exports = function resolve (root, graph) {
    var output = {};

    traverse(graph, visitor.bind(null, output, root));

    return output;
};
