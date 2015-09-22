var putil = require('../path');
var set = require('lodash/object/set');
var traverse = require('protean/object/traverse');

function visitor (accumulator, root, opts, path, value) {
    if (path.length) {
        var local = putil.resolve(root, [path], opts)[0];
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
 * @param {Object} [opts]
 * @param {String} [opts.rootKey='{/}']
 * @returns {Object}
 */
module.exports = function resolve (root, graph, opts) {
    var output = {};

    traverse(graph, visitor.bind(null, output, root, opts));

    return output;
};
