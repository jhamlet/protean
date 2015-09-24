var putil = require('../path');
var traverse = require('protean/object/traverse');
var ROOT_KEY = require('../syntax/root-key');

function visitor (accumulator, root, rootKey, path, value) {
    if (value !== null) {
        return traverse.CONTINUE;
    }

    var idx = path.indexOf(rootKey);

    if (~idx) {
        path.splice(0, idx + 1);
    }
    else {
        path.splice.apply(path, [0, 0].concat(root));
    }

    accumulator.push(path);
};
/**
 * **File:** [falcor/path/resolve.js](falcor/path/resolve.js)
 *
 * @member module:Falcor.Path.resolve
 * @function
 * @param {Path} root
 * @param {PathSet[]} paths
 * @param {Object} [opts]
 * @param {String} [opts.rootKey='{/}']
 * @returns {PathSet[]}
 */
module.exports = function resolve (root, paths, opts) {
    var rootKey = (opts && opts.rootKey) || ROOT_KEY;
    var pathTree = putil.toTree(paths);
    var output = [];

    traverse(pathTree, visitor.bind(null, output, root, rootKey));

    return putil.collapse(output);
};
