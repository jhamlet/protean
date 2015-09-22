var putil = require('../path');
var set = require('lodash/object/set');
var atoms = require('protean/falcor/graph/atoms');

function visitor (accumulator, root, opts, path, atom) {
    if (path.length) {
        var local = putil.resolve(root, [path], opts)[0];
        set(accumulator, local, atom);

        if (atom.$type && atom.$type === 'ref') {
            atom.value = putil.resolve(root, [atom.value])[0];
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

    atoms(graph, visitor.bind(null, output, root, opts));

    return output;
};
